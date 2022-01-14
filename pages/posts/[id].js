import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const renderers = {
  img: ({ node, ...props }) => (
    <Image src={props.src} alt={props.alt} height={289} width={1459} />
  ),
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ReactMarkdown components={renderers}>{postData.content}</ReactMarkdown>
    </Layout>
  );
}
