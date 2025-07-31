import { render, screen } from "@testing-library/react";
import NewsCard from "../presentation/components/NewsCard";
import { BrowserRouter } from "react-router-dom";
import type { Article } from "../domain/entities/Article";

const mockArticle: Article = {
  title: "Test News Title",
  urlToImage: "",
  description: "This is a test news description.",
  url: "https://example.com/news/1",
};

describe("App", () => {
  test("render newsCard component", () => {
    render(
       <BrowserRouter>
        <NewsCard article={mockArticle} index={0} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test News Title")).toBeInTheDocument();
    expect(screen.getByText("This is a test news description.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View Detail/i })).toBeInTheDocument();
  });
});
