import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import remarkautolink from "remark-autolink-headings";
import remarkslug from "remark-slug";
import remarkcode from "remark-code-titles";
import remarkGfm from 'remark-gfm'
import readingTime from 'reading-time'

const root = process.cwd();

export function getFiles() {
  const filesPath = path.join(root, "data");
  const files = fs.readdirSync(filesPath);
  return files;
}

export async function getFilesBySlug(slug) {
  const filePath = path.join(root, "data", `${slug}.mdx`);
  const mdxSource = fs.readFileSync(filePath, "utf-8");

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkautolink, remarkslug, remarkcode, remarkGfm],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontmatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug,
      ...data,
    },
  };
}

export async function getFilesMetadata() {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", postSlug),
      "utf-8"
    );
    const { data, content } = matter(mdxSource);
    return [{
      ...data,
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: postSlug.replace(".mdx", "")
    }, ...allPosts];
  }, []);
}
