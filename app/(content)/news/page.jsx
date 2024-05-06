import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1> The news page </h1>
      <NewsList data={news} />
    </>
  );
}

export default NewsPage;
