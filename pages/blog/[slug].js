import { getFiles, getFilesBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import {MDXComponents} from "../../components/blog/MDXComponets";
import Container from '../../components/container'
import HeaderBlog from "../../components/blog/header-blog";
import ScroollTop from '../../components/ScrollToop'
import Head from 'next/head'
export default function Post({ source, frontmatter }) {
  const { title, publishedAt, tags, readingTime, slug } = frontmatter
  return (
    <>
    <Head>
        <title>Rivers Code Blog | {title}</title>
      </Head>
    <Container>
      <ScroollTop />
      <HeaderBlog title={title} publishedAt={publishedAt} readingTime={readingTime.text} tags={tags} slug={slug} />
      <MDXRemote {...source} components={MDXComponents} />
    </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesBySlug(params.slug);
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
