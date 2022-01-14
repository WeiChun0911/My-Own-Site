import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import ImageInsideBlog from "../../components/imageInsideBlog";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content);
  return {
    props: {
      postData,
      source: mdxSource,
    },
  };
}

const components = { ImageInsideBlog };

export default function Post({ postData, source }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}
