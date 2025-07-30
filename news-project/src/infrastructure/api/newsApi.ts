import type { Article } from "../../domain/entities/Article";

const API_KEY = "24c323de5b4646b5bb2b384a2dc6dfb5";

async function getArticlesFromApi (): Promise<Article[]> {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles || [];
}

export default getArticlesFromApi;