import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

async function FilterendNews({ params }) {
  const selectedYear = params.filter?.[0];

  const selectedMonth = params.filter?.[1];

  let news;

  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);

    links = [];
  }

  let newsContent = <p> No news found for the selected period... </p>;

  if (!!news?.length) {
    newsContent = <NewsList data={news} />;
  }

  const avalableNewsYears = await getAvailableNewsYears();

  if (
    (selectedYear && !avalableNewsYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid path");
  }

  return (
    <>
      <header id="archive-header">
        Wait a minute before continuing
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  {" "}
                  <Link href={href}> {link} </Link>{" "}
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

export default FilterendNews;
