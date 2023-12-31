//blog.microcms.io/next-pagination/
import Link from "next/link";

import styles from "styles/pagenation.module.css"

export default function Pagination({ totalCount }) {
  const PER_PAGE = 5;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className={styles.pagenation}>
      <ul>
        {range(1, Math.ceil(totalCount/PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`/blogs/list/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
