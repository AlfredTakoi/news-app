import type { Article } from "../../domain/entities/Article";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

async function getArticlesFromApi (): Promise<Article[]> {
  const response = await fetch(`${BASE_URL}${API_KEY}`);
  const data = await response.json();
  return data.articles || [];
}

export default getArticlesFromApi;