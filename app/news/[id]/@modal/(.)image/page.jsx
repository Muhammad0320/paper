"use client";

import { DUMMY_NEWS } from "@/dummyNews";
import { useRouter } from "next/navigation";

function ImageView({ params }) {
  const router = useRouter();

  const newsData = DUMMY_NEWS.find((news) => news.slug === params.id);

  if (!newsData) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsData.image}`} alt={newsData.title} />
        </div>
      </dialog>
    </>
  );
}

export default ImageView;
