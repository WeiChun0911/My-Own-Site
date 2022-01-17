import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "../../components/layout";
import Date from "../../components/date";
import ImageInsideBlog from "../../components/imageInsideBlog";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import rehypeHighlight from "rehype-highlight";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  return {
    props: {
      title: postData.title,
      date: postData.date,
      source: mdxSource,
    },
  };
}

const components = { ImageInsideBlog };

export default function Post({ title, date, source }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}
