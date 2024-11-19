import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"

export default function NewsBoard({category}) {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        console.log(url);
        
        fetch(url)
            .then((res)=>res.json())
            .then((data)=> setArticles(data.articles))
    },[category])
    return (
        <>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {
                articles.map((article,index)=>(
                    <NewsItem key={index} article={article} title={article.title} description={article.description} src={article.urlToImage} url={article.url} />
                ))
            }
        </>
    )
}