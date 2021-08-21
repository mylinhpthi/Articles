import React, { useState } from 'react'

function useArticleUpdate() {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const update = (id, newUser) => {
        setLoading(true);
        setSuccess(false);
        setError(false);
        fetch(`https://61176b1330022f0017a05df8.mockapi.io/ap1/v1/article/${id}`,{
            method: "put",
            body: JSON.stringify(newUser)
        })
        .then((res) =>{
            if(res.ok)  return res.json()
            throw new Error("request failed")
        })
        .then(json =>{
            setResult(json);
            setSuccess(true);
        })
        .catch(error =>setError(true))
        .finally(() =>setLoading(false))
    };
    return (
        [update,{result,loading,success,error}]
    );
}

export default useArticleUpdate
