import React from 'react'
import { Link } from 'react-router-dom'

function ArticleItem({id,author_name, author_avatar, title, content, image, category, createdAt}) {
    return (
        <Link className="" to = {`/detail/${id}`}>
            <div className="content__Item">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="category">
                    <p>{category}</p>
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>  
                <div className="author">
                    <img src={author_avatar} alt="" />
                    <p>{author_name} <em>on {new Date(createdAt).toLocaleDateString()}</em></p>
                </div>
                  
            </div>
        </Link>
    )
}

export default ArticleItem
