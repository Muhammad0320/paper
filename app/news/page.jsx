import { DUMMY_NEWS } from "@/dummyNews";

function NewsPage() {
  return (
    <div className="">
      {DUMMY_NEWS.map((item) => (
        <li className="news-list">
          <Image src={item.image} alt={item.title} />

          <Link href={`/news/${item.slug}`}> {item.title} </Link>
        </li>
      ))}
    </div>
  );
}

export default NewsPage;
