import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Article } from '../../domain/entities/Article';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import fallbackImg from "./../../assets/fallback-img.jpg"
import fetchArticles from '../../usecases/fetchArticles';

function NewsDetails() {
  const { index } = useParams<{ index: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const navigate = useNavigate();

  const getNews = async () => {
    try {
      const data = await fetchArticles();
      const idx = parseInt(index || "0", 10)
      if (data[idx]) {
        setArticle(data[idx]);
      } else {
        navigate("/");
      }
    } catch(error: unknown) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, [index])

  if (!article) {
    return (
      <div className="text-center min-h-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    )
  };

  return (
    <>
      <div className="p-4 max-w-3xl mx-auto space-y-4">
        <img
          src={article.urlToImage || fallbackImg}
          alt={article.title}
          className="w-full h-80 object-cover rounded"
        />
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="text-gray-700">{article.description}</p>
        <Button onClick={() => navigate("/")}>Back to List</Button>
        <Link to={article.url} target="_blank">
          <Button className="ms-2">Read More</Button>
        </Link>
      </div>
    </>
  )
}

export default NewsDetails;