import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((year) => {
            <li key={year}>
              {" "}
              <Link href={`/archive/${year}`}> {year} </Link>{" "}
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default ArchivePage;
