import React, { useState } from 'react'

function useArticleCreate() {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const create = (newUser) => {
        setLoading(true);
        setSuccess(false);
        setError(false);
        fetch("https://61176b1330022f0017a05df8.mockapi.io/ap1/v1/article",{
            method: "post",
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(json =>{
            setResult(json);
            setSuccess(true);
        })
        .catch(error =>setError(true))
        .finally(() =>setLoading(false))
    };
    return (
        [create,{result,loading,success,error}]
    );
}

export default useArticleCreate
