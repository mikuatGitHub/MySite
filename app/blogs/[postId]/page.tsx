import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Link from "next/link";

import { getDetail, getList } from "lib/microcms";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";

import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSide,
} from "components/twocolumn";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  // console.log(post)

  if (!post) {
    notFound();
  }

  return (
  <Container>
    <PostHeader title={post.title} publish={post.publishedAt} eyecatch={post.eyecatch} />

    <TwoColumn>
    <TwoColumnMain>
      <PostBody>
      <div>{parse(post.content)}</div>
      </PostBody>
    </TwoColumnMain>

    <TwoColumnSide>
      <h5>categories</h5>
    </TwoColumnSide>
    </TwoColumn>

    <Link href='./blogs'>BLOGS-TOP</Link>
  </Container>
  );
}

export const metadata = {
  title: "blog-page",
};

