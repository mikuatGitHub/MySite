import Link from "next/link";
import { getList } from "../../lib/microcms";

import Container from "../../components/container";
import Hero from "../../components/hero";
import Posts from "../../components/posts";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <Container>
      <Hero title="Blog" subtitle="microCMSと連携したブログ"></Hero>

      {/* <ul>
        {contents.map((post) => {
          return (
              <li key={post.id}>
                <Link href={`/blogs/${post.id}`}>{post.title}</Link>
              </li>
              );
            })}
      </ul> */}
      <Posts contents={contents}></Posts>

    </Container>
  );
}

export const metadata = {
  title: 'blog',
}
