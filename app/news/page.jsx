import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummyNews";

function NewsPage() {
  return (
    <>
      <h1> The news page </h1>
      <NewsList data={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
