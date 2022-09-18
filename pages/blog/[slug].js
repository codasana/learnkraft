import Layout from '../../components/Layout';
import Head from "next/head";
import { format, parseISO } from "date-fns";
import Image from 'next/image';
import CTA from "../../components/CTA"
import { Video } from '../../components/blog/Video'
import { Wistia } from '../../components/blog/Wistia'
import { Link } from '../../components/blog/Link'
import { useLiveReload, useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts, Post } from "contentlayer/generated";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
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

const BlogImage = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div className={`${className} overflow-hidden rounded-lg text-center`}>
      <div className="-mb-3">
        <Image
          src={src}
          alt={alt}
          width={width ?? '1600'}
          height={height ?? '900'}
          placeholder="blur"
          blurDataURL={src}
        />
      </div>
    </div>
  )
}
const Center = ({
  children
}) => {
  return (
    <div className={`text-center mt-2 mb-4`}>
      {children}
    </div>
  )
}


const mdxComponents = {
  Video,
  BlogImage,
  Wistia,
  Center,
  a: Link
}
const PostLayout = ({ post }) => {
  useLiveReload();
  const MDXContent = useMDXComponent(post.body.code || '')
  return (
    <>
    <NextSeo
      canonical={`https://learnkraft.com/${post?.url}`}
      openGraph={{
        url: `https://learnkraft.com/${post?.url}`,
      }}
    />
    <Layout>
      <Head>
            <title>{post.title}</title>
            <meta content={post.description ? post.description : post.title} name="description" key="metadescription"/>
            <meta property="og:type" content="article" key="ogtype"/>
            <meta property="og:title" content={post.title} key="ogtitle"/>
            <meta property="og:image" content={`https://learnkraft.com${post.image}`} key="ogimage"/>
            <meta property="og:description" content={post.description ? post.description : post.title} key="ogdescription"/>
            <meta property="og:url" content={post.title} key="ogtitle"/>
            <meta name="twitter:title" content={post.title} key="twittertitle"/>
            <meta name="twitter:image" content={`https://learnkraft.com${post.image}`} key="twitterimage"/>
            <meta name="twitter:description" content={post.description ? post.description : post.title} key="twitterdescription"/>
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
                <div className="w-full mt-8 prose dark:prose-dark max-w-none font-serif text-lg">
                  {MDXContent && <MDXContent components={{ ...mdxComponents }} />}
                </div>
                {/*<div dangerouslySetInnerHTML={{ __html: post.body.html }} className="w-full mt-8 prose dark:prose-dark max-w-none font-serif text-lg"/>*/}
            </article>
        </main>
        <CTA />
    </Layout>
    </>
  );
};

export default PostLayout;
