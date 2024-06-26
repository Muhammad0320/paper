import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";

async function ImageView({ params }) {
  const newsData = await getNewsItem(params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        </div>
      </dialog>
    </>
  );
}

export default ImageView;
