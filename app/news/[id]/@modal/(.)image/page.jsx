import { DUMMY_NEWS } from "@/dummyNews";

function ImageView({ params }) {
  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        </div>
      </dialog>
    </>
  );
}

export default ImageView;
