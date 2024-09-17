import { useEffect } from "react";
import { useState } from "react"
import Newsitem from "./Newsitem";

const Newsboard = ({category}) => {
    const [articles,setArticle]=useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6bbe51e8bea746c0833af7d57d528cd7`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data); // Check the response here
            setArticle(data.articles);
          })
          .catch(error => console.error("Error fetching news:", error));
      }, [category]);
      
  return (
    <div>
      <h2 className="text-center">Tazaa <span className="badge bg-danger">Khabar</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default Newsboard
