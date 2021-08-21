import React, { useEffect, useState } from 'react'

function useArticleById(id) {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setSuccess(false);
        setError(false);
        fetch(`https://61176b1330022f0017a05df8.mockapi.io/ap1/v1/article/${id}`)
        .then(res => res.json())
        .then(json =>{
            setArticle(json);
            setSuccess(true);
        })
        .catch(error =>setError(true))
        .finally(() =>setLoading(false))
    }, [])


    return (
          [article, loading, success, error]  
        
    )
}

export default useArticleById
