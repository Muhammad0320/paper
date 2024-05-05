import { DUMMY_NEWS } from "@/dummyNews";

function ImageView({ params }) {
  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={newsData.image} alt={newsData.title} />
    </div>
  );
}

export default ImageView;
