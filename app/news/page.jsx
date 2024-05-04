import { DUMMY_NEWS } from "@/dummyNews";
import Image from "next/image";
import Link from "next/link";

function NewsPage() {
  return (
    <div className="">
      <li className="news-list">
        {DUMMY_NEWS.map((item) => (
          <Link href={`/news/${item.slug}`}>
            <Image src={`/images/news/${item.image}`} alt={item.title} fill />
            <span> {item.title} </span>
            Read more...
          </Link>
        ))}
      </li>
    </div>
  );
}

export default NewsPage;
