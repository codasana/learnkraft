import Layout from '../../components/Layout';
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
    return { props: { posts } };
}

function PostCard(post) {
    return (
        <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.image}
                    alt="blog"
                    width="720"
                    height="400"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-primary-400 mb-1">
                    {post.category}
                    </h2>
                    <h1>
                      <Link href={post.url}>
                        <a className="title-font text-xl font-semibold text-gray-900 mb-3">
                          {post.title}
                        </a>
                      </Link>
                    </h1>

                    
                    {/*<p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                    </p>*/}
                    {/*<div className="flex items-center flex-wrap ">
                    
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <time dateTime={post.date} className="block text-xs text-gray-600 mb-2">
                      {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                  <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
                  */}
                </div>
                </div>
            </div>
    );
  }

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
            <title>Blog - Learn Kraft</title>
            <meta content="Blog by Learn Kraft - Resources to help you grow your business" name="description" key="metadescription"/>
        </Head>
        {/*  Page sections */}

        <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-b from-blue-100 to-blue-100">
          <div className="container mx-auto px-4 md:px-10 lg:px-32 pt-16 pb-8">
            <div className="flex flex-col text-center w-full mb-16">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif">Learn Kraft Blog</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">Resources to help you grow your business digitally.</p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-b from-blue-100">
          <div className="container mx-auto pb-12  px-2 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-wrap -m-4">
              {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
              ))}
            </div>
          </div>
        </section>


    </Layout>
  )
}