import { DUMMY_NEWS } from "@/dummyNews";

function ImageView({ params }) {
  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <>
      <h2>This is intercepted</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
      </div>
    </>
  );
}

export default ImageView;
