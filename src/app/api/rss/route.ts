import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const siteUrl = process.env.SITE_URL || 'https://dikewisdom.com';
  const posts = getAllPosts();

  const feed = new RSS({
    title: 'Dike Wisdom — Blog',
    description: 'Technical articles, case studies, and tutorials on full-stack development and infrastructure.',
    site_url: siteUrl,
    feed_url: `${siteUrl}/api/rss`,
    language: 'en',
    pubDate: posts[0]?.date || new Date().toISOString(),
    copyright: `© ${new Date().getFullYear()} Dike Wisdom`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.date,
      categories: post.tags,
      author: 'Dike Wisdom',
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
