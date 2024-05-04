import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

function LatestPage() {
  const latest = getLatestNews();

  return (
    <div>
      <h1> Latest News </h1>

      <NewsList data={latest} />
    </div>
  );
}

export default LatestPage;
