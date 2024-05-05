import NewsList from "@/components/NewsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

function LaterstNews({ params }) {
  const selectedYear = params.filter?.[0];

  const selectedMonth = params.filter?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    console.log(news);

    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p> No news found for the selected period... </p>;

  if (!!news?.length) {
    newsContent = <NewsList data={news} />;
  }

  const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        Wait a minute before continuing
        <nav>
          <ul>
            {links.map((year) => {
              return (
                <li key={year}>
                  {" "}
                  <Link href={`/archive/${year}`}> {year} </Link>{" "}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default LaterstNews;
