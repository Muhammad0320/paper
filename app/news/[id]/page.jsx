import { DUMMY_NEWS } from "@/dummyNews";

function NewsDetailsPage({ params }) {
  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsData.image}`} alt={`${newsData.title}`} />
        <h1> {newsData.title} </h1>

        <time dateTime={newsData.date}> {newsData.date} </time>
      </header>
      <p> {newsData.content} </p>
    </article>
  );
}

export default NewsDetailsPage;
