import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import axios from "axios";

function News() {
  const [newsData, setNewsData] = useState([]);
  const [currentNews, setCurrentNews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-11-05&sortBy=publishedAt&apiKey=a784030f1f4a4a16aa0251bdea7e1c11"
        );

        const data = await response.json();
        console.log("Fetched data:", data);
        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error", error);
        // toast.error("Something went wrong");
        // setError("Error fetching news data");
        // setLoading(false);
      }
    };

    const timingInterval = setInterval(() => {
      if (newsData && newsData.length > 0) {
        setCurrentNews((prevNews) => (prevNews + 1) % newsData.length);
      }
    }, 5 * 60 * 1000);

    fetchNews();

    return () => clearInterval(timingInterval);
  }, [newsData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {newsData && newsData.length > 0 && (
        <div key={newsData[currentNews]?.url}>
          <img
            src={newsData[currentNews]?.urlToImage}
            alt={newsData[currentNews]?.title}
            style={{ height: "350px", width: "350px" }}
          />
          <h1>{newsData[currentNews]?.title}</h1>
          <p>{newsData[currentNews]?.description}</p>
        </div>
      )}
    </div>
  );
}

export default News;
