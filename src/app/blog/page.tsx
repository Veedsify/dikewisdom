import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical articles, case studies, and tutorials by Dike Wisdom on full-stack development, infrastructure, and cloud engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="dark:bg-gray-950 pt-32">
        <section>
          <div className="container">
            <div className="lg:border-x">
              <div className="lg:max-w-screen-lg lg:mx-auto py-14 lg:py-20">
                <div className="text-center mb-16">
                  <h1 className="text-4xl sm:text-5xl font-black !mt-0 font-heading">Blog</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Writing about full-stack development, infrastructure, DevOps, and
                    lessons learned from building production applications.
                  </p>
                </div>

                {posts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-xl text-gray-500">No posts yet. Check back soon!</p>
                  </div>
                ) : (
                  <div className="grid gap-8 not-prose">
                    {posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block border rounded-xl p-8 bg-white dark:bg-gray-900 dark:border-gray-800 hover:shadow-lg transition-all duration-300 no-underline"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <time className="text-sm text-gray-500 dark:text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <span className="text-sm text-gray-400">·</span>
                          <span className="text-sm text-gray-500 dark:text-gray-500">{post.readingTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-200 font-heading group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
