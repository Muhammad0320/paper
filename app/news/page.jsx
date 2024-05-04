import { DUMMY_NEWS } from "@/dummyNews";
import Image from "next/image";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1> The news page </h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <img src={`/images/news/${item.image}`} alt={item.title} />
              <span> {item.title} </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;
