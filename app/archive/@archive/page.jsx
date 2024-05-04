import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      Wait a minute before continuing
      <nav>
        <ul>
          {links.map((year) => {
            return (
              <li key={year}>
                {" "}
                <Link href={`/archive/${year}`}> {year} </Link>{" "}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default ArchivePage;
