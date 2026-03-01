import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dike Wisdom'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="dark:bg-gray-950 pt-32">
        <article>
          <div className="container">
            <div className="lg:border-x">
              <div className="lg:max-w-screen-md lg:mx-auto py-14 lg:py-20">
                {/* Breadcrumb */}
                <nav className="mb-8 not-prose" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><Link href="/" className="hover:text-gray-950 dark:hover:text-gray-200 transition-colors">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/blog" className="hover:text-gray-950 dark:hover:text-gray-200 transition-colors">Blog</Link></li>
                    <li>/</li>
                    <li className="text-gray-950 dark:text-gray-200 font-medium truncate max-w-[200px]">{post.title}</li>
                  </ol>
                </nav>

                {/* Post header */}
                <header className="mb-12">
                  <div className="flex flex-wrap gap-2 mb-4 not-prose">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black !mt-0 font-heading">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 mt-4 not-prose text-gray-500 dark:text-gray-400">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </header>

                {/* Post content */}
                <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-heading prose-lg">
                  <MDXRemote source={post.content} />
                </div>

                {/* Author */}
                <div className="mt-16 pt-8 border-t not-prose">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 dark:text-gray-400 font-heading">
                      DW
                    </div>
                    <div>
                      <p className="font-semibold text-gray-950 dark:text-gray-200">Dike Wisdom</p>
                      <p className="text-sm text-gray-500">Full-Stack Developer & Infrastructure Engineer</p>
                    </div>
                  </div>
                </div>

                {/* Related posts */}
                {otherPosts.length > 0 && (
                  <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold font-heading mb-6">More Articles</h2>
                    <div className="grid gap-4 not-prose">
                      {otherPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="group block border rounded-lg p-6 bg-white dark:bg-gray-900 dark:border-gray-800 hover:shadow-md transition-all duration-300 no-underline"
                        >
                          <h3 className="text-lg font-semibold text-gray-950 dark:text-gray-200 font-heading group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{p.readingTime} · {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
