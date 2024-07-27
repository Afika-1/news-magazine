import React, { useEffect, useState } from 'react'
import { NewsItems } from './NewsItems';

export const NewsBoard = ({category}) => {
    const [articles , setArticles]=useState([]);
    useEffect(()=>{ 
        let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));
    }, [category])
  return (
    <div className='pb-5' style={{backgroundColor:" rgb(211, 211, 111)"}}>
        <h1 className='text-center pt-2 '>Latest <span className='badge bg-danger'>News</span></h1> 
        <h4 className='text-center p-3'>{category}</h4>  
        {articles.map((news, index)=>{
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
 