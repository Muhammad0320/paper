import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

async function LatestPage() {
  const latest = await getLatestNews();

  return (
    <div>
      <h1> Latest News </h1>

      <NewsList data={latest} />
    </div>
  );
}

export default LatestPage;
