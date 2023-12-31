import Link from 'next/link'
import Image from 'next/image'

import styles from 'styles/posts.module.css'

export default function Posts({ contents }) {
  return (
    <div className={styles.stack}>

    <ul>
    {contents.map((post) => {
      return (
        <li key={post.id} className={styles.post}>

        <Link href={`/blogs/${post.id}`}>

          <figure>
          <Image
              priority
              src= {post.eyecatch.url}
              alt=""
              width={post.eyecatch.width}
              height={post.eyecatch.height}
              sizes="(min-width:1152px)576px, 50vw"
              style={{ width: "100%", height: "auto" }}
            ></Image>
          </figure>

          <h2>{post.title}</h2>
          </Link>
        </li>
      );
    })}
    </ul>

    </div>/* stack */
  );
}

