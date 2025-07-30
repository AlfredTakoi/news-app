import type { Article } from "../domain/entities/Article";
import getArticlesFromApi from "../infrastructure/api/newsApi";

async function fetchArticles(): Promise<Article[]> {
  const response = await getArticlesFromApi();
  return await response;
}

export default fetchArticles;