import { getList } from "lib/microcms";

import Container from "components/container";
import Hero from "components/hero";
import Posts from "components/posts";
import Pagenation from "components/pagenation";

export default async function PageId(
  {params: {pageId}}:{params: {pageId: number}}) {

  const { contents, totalCount } = await getList(pageId);
  // console.log(pageId)

  return (
    <Container>
      <Hero title="Blogs" subtitle="microCMSと連携したブログ"></Hero>

      {/* <ul>
        {contents.map((post) => {
          return (
              <li key={post.id}>
                <Link href={`/blogs/${post.id}`}>{post.title}</Link>
              </li>
              );
            })}
      </ul> */}
      <Posts contents={contents} />
      <Pagenation totalCount={totalCount} />
    </Container>
  );
}

export const metadata = {
  title: "blogs",
};
