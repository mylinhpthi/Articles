import React from 'react'
import useArticleItem from '../hooks/useArticleItem';
import ArticleItem from './ArticleItem';

function ArticleList() {
    const [article,loading,success,error] = useArticleItem();
    const hasArticle = article != null && article.length >0;
    const renderItem = () =>(
        article.map(({author_name, id,author_avatar, title, content, image, category,createdAt})=>(
            <ArticleItem key = {id} id={id} author_name = {author_name} author_avatar = {author_avatar} 
            title = {title} content = {content} image={image} category={category} createdAt={createdAt}/>
        ))
    )
    return (    
        <div>
            
            <div className="container content__listItem">
                {loading && <em>Loading...</em>}
                {error && <em>Failed</em>}
                {success && !hasArticle &&<em>No data</em>}
                {success && hasArticle && renderItem()}
            </div>
            
        </div>
    )
}

export default ArticleList
