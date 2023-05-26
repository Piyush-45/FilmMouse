import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  const [hollywoodNews, setHollywoodNews] = useState([]);
  const [singleHollywoodNews, setSingleHollywoodNews] = useState([]);
  const [BollywoodNews, setBollywoodNews] = useState([]);
  const [singleBollywoodNews, setSingleBollywoodNews] = useState([]);

  const bollywoodNewsApi = `https://newsapi.org/v2/everything?q=bollywood&sortBy=publishedAt&apiKey=13a9f12c525f4b449c3d01f054ce0adb`;

  const hollywoodNewsApi = `https://newsapi.org/v2/everything?q=hollywood&sortBy=publishedAt&apiKey=13a9f12c525f4b449c3d01f054ce0adb`;

  useEffect(() => {
    const fetchHollywoodNews = async (url) => {
      const response = await axios.get(url);
      setHollywoodNews(response.data.articles.slice(0, 3));
      setSingleHollywoodNews(response.data.articles.slice(2, 3));
      // console.log(response.data.articles.slice(0,1))
      // console.log(response.data.articles)
    };

    const fetchBollywoodNews = async (url) => {
      const response = await axios.get(url);
      setBollywoodNews(response.data.articles);
      setSingleBollywoodNews(response.data.articles.slice(1, 2));
      console.log(response.data.articles)
    };

    fetchHollywoodNews(hollywoodNewsApi);
    fetchBollywoodNews(bollywoodNewsApi);
  }, []);

  return (
    <div className="news_container">
      <h1 className="">LATEST NEWS</h1>
      <div className="main_newsContainer">
        {singleBollywoodNews.map((item) => {
          return (
            <>
              <div className="hero_news" key={item.id}>
                <div className="image_half">
                  <img src={item.urlToImage} alt="" />
                </div>

                <div className="text_half">
                  <a className="text_half_h" href={item.url}>{item.title}</a>
                  <p className="text_half_date">{item.publishedAt}</p>
                  <p className="text_half_p">{item.description}</p>
                </div>
              </div>
            </>
          );
        })}

        <div className="more_news">
          <h1>More latest news</h1>
          <div className="more_news_list_container">
            {hollywoodNews?.map((item) => {
            //   console.log(item);
              return (
                <div className="card" key={item.id}>
                  <a className="more_news text_half_h" href={item.url}>{item.title}</a>
                  <p className="more_news_date text_half_date">{item.publishedAt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
