import { getNewsItem } from "@/lib/news";

async function ImageView({ params }) {
  const newsData = await getNewsItem(params.slug);
  if (!newsData) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
    </div>
  );
}

export default ImageView;
