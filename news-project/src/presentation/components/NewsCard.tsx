import { Card, Button } from "antd";
import type { Article } from "../../domain/entities/Article";
import { Link } from "react-router-dom";
import fallbackImg from "./../../assets/fallback-img.jpg"

const { Meta } = Card;

type Props = {
  article: Article;
  index: number;
};

function NewsCard({ article, index }: Props) {
  return (
    <Card
      className="shadow-md h-full flex flex-col"
      cover={<img alt={`news-${index}`} className="h-40 w-full object-cover" src={article.urlToImage || fallbackImg} />}
    >
      <Meta
        className="text-start mt-auto"
        title={article.title}
        description={<p className="line-clamp-3">
          {article.description}
        </p>}
      />

      <Link to={`/news/${index}`} className="mt-3 block" >
        <Button className="p-0 w-full">View Detail</Button>
      </Link>
    </Card>
  );
}

export default NewsCard;
