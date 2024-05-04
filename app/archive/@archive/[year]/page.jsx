import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

function LaterstNews({ params }) {
  const newsByYear = getNewsForYear(params.year);

  return (
    <div>
      <h1> Latest news </h1>

      <NewsList data={newsByYear} />
    </div>
  );
}

export default LaterstNews;
