import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){
    const data = useLoaderData()
    console.log(data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rhythm1821')
    //     .then(res=>res.json())
    //     .then(data=>{console.log(data);setData(data)})
    // },[])
    return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="Git pic" width="300px" />
    </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rhythm1821')
    return response.json()
}