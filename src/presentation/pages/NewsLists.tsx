import { useEffect, useState } from 'react';
import type { Article } from '../../domain/entities/Article';
import  NewsCard from "../components/NewsCard";
import { Spin } from 'antd';
import fetchArticles from '../../usecases/fetchArticles';

function NewsLists() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    try {
      const data = await fetchArticles();
      setArticles(data);
      setLoading(false);
    } catch(error: unknown) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
    <>
      {loading ? (
        <div className="text-center min-h-full flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-5 text-center">Top Headline News</h1>
          <div className='grid grid-cols-12 gap-8'>
            {
              articles.map((data, index) => (
                <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
                  <NewsCard article={data} index={index} />
                </div>
              ))
            }
          </div>
        </div>
      )}
    </>
  )
}

export default NewsLists
