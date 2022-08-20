import Layout from '../../components/Layout';
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from 'next/image';
export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  return (
    <Layout>
      <Head>
            <title>{post.title}</title>
            <meta content={post.title} name="description" key="metadescription"/>
            <meta property="og:type" content="article" key="ogtype"/>
            <meta property="og:title" content={post.title} key="ogtitle"/>
            <meta property="og:image" content={`https://creatpad.com${post.image}`} key="ogimage"/>
            <meta property="og:description" content={post.title} key="ogdescription"/>
            <meta name="twitter:title" content={post.title} key="twittertitle"/>
            <meta name="twitter:image" content={`https://creatpad.com${post.image}`} key="twitterimage"/>
            <meta name="twitter:description" content={post.title} key="twitterdescription"/>
            {post.date && (
            <meta property="article:published_time" content={post.date} key="time"/>
            )}
        </Head>
        <main className="flex flex-col justify-center px-8 bg-white dark:bg-gray-900 ">
            <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto my-16 ">
            <h1 className="mb-3 text-3xl font-bold leading-tighter text-black md:text-4xl dark:text-white">
                {post.title}
            </h1>

            <div 
              className="flex flex-col items-start justify-between w-full mt-2 mb-4 md:flex-row md:items-center">
                  <div className="flex items-center">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {post.author} / {format(parseISO(post.date), "LLLL d, yyyy")} 
                          </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                      {post.readingTime.text}  {` • `} {post.wordCount} words{/*• <span>227,632 views</span>*/}
                  </p>
              </div>
              <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.image}
                    alt="blog"
                    width="720"
                    height="400"
                />
                <div dangerouslySetInnerHTML={{ __html: post.body.html }} className="w-full mt-8 prose dark:prose-dark max-w-none font-serif text-lg"/>
            </article>
        </main>

    </Layout>
  );
};

export default PostLayout;