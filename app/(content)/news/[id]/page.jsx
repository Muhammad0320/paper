import { DUMMY_NEWS } from "@/dummyNews";
import Link from "next/link";
import { notFound } from "next/navigation";

function NewsDetailsPage({ params }) {
  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsData.slug}/image`}>
          <img
            src={`/images/news/${newsData.image}`}
            alt={`${newsData.title}`}
          />
        </Link>
        <h1> {newsData.title} </h1>

        <time dateTime={newsData.date}> {newsData.date} </time>
      </header>
      <p> {newsData.content} </p>
    </article>
  );
}

export default NewsDetailsPage;