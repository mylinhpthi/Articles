import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useArticleById from '../hooks/useArticleById';
import useArticleCreate from '../hooks/useArticleCreate';
import useArticleUpdate from '../hooks/useArticleUpdate';

function ArticleForm() {
    const {id} = useParams();
    const [formData, setFormData] = useState({});
    const [article,loading,success,error] = useArticleById(id);
    const [createUser,{result: cArticle,loading: cloading,success: cSuccess,error: cError}] = useArticleCreate();
    const [updateUser,{result: uArticle,loading: uloading,success: uSuccess,error: uError}] = useArticleUpdate();

    // Chi update khi co id
    const isUpdate = !!id;
    //San sang create khi chua co id or san sang update khi co du lieu va load du lieu thanh cong
    // muon update thi phai lay duoc cai id do va du lieu cua no
    const isReady = !id || (article && success);

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        if(isUpdate)  updateUser(id, formData);
        else
            createUser(formData);
    }
    const handleChange = (field) =>(event) =>(
        setFormData((prev) =>({
            ...prev,
            [field]: event.target.value
        }))
    );
    // reset lai du lieu khi create
    useEffect(() => {
        if(cSuccess) setFormData({})
    }, [cSuccess])
    
    //doc du lieu tu id detail len form update
    useEffect(() => {
        if(isReady && isUpdate){
            const {author_name, title} = article || {};
            setFormData({author_name, title});
        }
    }, [isReady])
      
    //khi chuyen tu update sang create la id thay doi thi reset lai form
    useEffect(() => {
        if(!isUpdate) setFormData({})
    }, [id])

    return (
        
        <div className="container container__form">
            {/* status of create */}
            {cloading && <em>Create user....</em>}
            {cError && <em>An error occurs, try again</em>}
            {cSuccess && <em>User is create successfully</em>}
            
            {/* Status of update */}
            {uloading && <em>Loading user....</em>}
            {uError && <em>An error occurs, try again</em>}
            {uSuccess && <em>"User is update successfully"</em>}

            <form className="form__container" onSubmit={handleSubmit} >
            {/* Ten tac gia */}
           <div className="form form__user">
               <label htmlFor="author_name">New Article Name</label>
                <input value={formData['author_name'] || ""} onChange={handleChange("author_name")} type="text" name="author_name" placeholder="EX: David William" id="author_name" />
           </div>
           {/* Title moi */}
           <div className="form form__title">
                <label htmlFor="author_title">New Title</label>
                <input  value={formData['title'] || ""} onChange={handleChange("title")} type="text" name="author_title" id="author_title" placeholder="EX: Natural and your life"/>
           </div>
           <button disabled={cloading || uloading} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ArticleForm
