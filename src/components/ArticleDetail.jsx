import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import useArticleById from '../hooks/useArticleById';

function ArticleDetail() {
    let {id} = useParams();
    const [article,loading,success,error] = useArticleById(id);
    const hasArticle = article != null ;
    const deleteRequest = (id) =>(event) =>{
        fetch(`https://61176b1330022f0017a05df8.mockapi.io/ap1/v1/article/${id}`,{
            method: "delete"
        })
        .then(() => console.log("Delete successfully"))
    }
    const renderUser = ()=>{
        const {author_avatar,author_name,content,createdAt,id,image,title} = article;
        return <div className="detail-container">
                <div className="detail-image">
                    <img src={image} alt="" />
                </div>
                <div className="detail-main">
                    <img src={author_avatar} alt="" />
                    <p> write by <b>{author_name}</b> <em>on {new Date(createdAt).toLocaleDateString()}</em></p>
                </div>
                
                <div className="detail-content">
                    <h4>{title}</h4>
                    <p> {content}</p>
                    <p>{content}</p>
                    <p>{content}</p>
                </div> 
                <div className="buttons">
                        <Link to ={`/update/${id}` } className="button button__update">Update</Link>
                         <Link to ={`/delete/${id}`} onClick ={deleteRequest(id)} className="button button__delete">Delete</Link>
                </div> 
                
                
        </div>       
    };
           
    return (
        <div className="container detail">
            {loading && <em>Loading...</em>}
            {error && <em>Fetch article failed</em>}
            {success && !hasArticle && <em>No Article</em>}
            {
                success && hasArticle && renderUser()
            }

        </div>
    )
}

export default ArticleDetail
