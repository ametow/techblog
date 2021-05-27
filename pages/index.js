import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
// import { getAllPosts } from "../lib/api";
import Head from "next/head";
import axios from "../utilities/axios";

export default function Index({ data }) {
  const heroPost = data[0];
  const morePosts = data.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Ametov's Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.image}
              author={heroPost.author}
              date={heroPost.date}
              id={heroPost.id}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const allPosts = getAllPosts([
  //   "title",
  //   "date",
  //   "slug",
  //   "author",
  //   "coverImage",
  //   "excerpt",
  // ]);
  const data = await (await axios.get("blogs")).data;

  return {
    props: { data },
  };
}
