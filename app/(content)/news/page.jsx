import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummyNews";

async function NewsPage() {
  const res = await fetch("http://localhost:8000/news");

  if (!res.ok) {
    throw new Error("Couldn't fetch news'");
  }

  const news = await res.json();

  return (
    <>
      <h1> The news page </h1>
      <NewsList data={news} />
    </>
  );
}

export default NewsPage;
