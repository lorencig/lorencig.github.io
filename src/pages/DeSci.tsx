import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

// Define DeSci-related content
const desciPosts = [
  {
    id: 1,
    content: `Decentralized Science (DeSci) represents a paradigm shift in how we conduct, fund, and share scientific research.

By leveraging blockchain technology and decentralized protocols, we can create more transparent, collaborative, and equitable scientific ecosystems.

The traditional academic publishing model has created barriers to knowledge access and innovation. DeSci offers a path toward open science where researchers maintain ownership of their work and communities can directly support breakthrough research.`,
    date: "15 I 2025"
  },
  {
    id: 2,
    content: `One of the most promising aspects of DeSci is the potential for decentralized research funding.

Through tokenization and DAOs (Decentralized Autonomous Organizations), research communities can pool resources and make collective decisions about which projects deserve support.

This democratizes the funding process and reduces dependency on traditional gatekeepers who may have conflicting interests or biases.`,
    date: "10 I 2025"
  },
  {
    id: 3,
    content: `Data sovereignty in scientific research is becoming increasingly important.

Researchers should have control over their data and be able to choose how it's shared, monetized, or built upon by others.

Blockchain-based systems can provide immutable records of research contributions while maintaining privacy and enabling fair attribution and compensation.`,
    date: "5 I 2025"
  }
];

const DeSci: React.FC = () => {
  return (
    <PageLayout>
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements (same as Blog page) */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
              decentralized science
            </h1>
            <p className="text-lg text-muted-foreground backdrop-blur-sm bg-background/30 p-3 rounded-lg inline-block">
              exploring the future of scientific research and collaboration
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 md:gap-10">
            {desciPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

interface Post {
  id: number;
  content: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 h-full transform group-hover:translate-y-[-5px] flex flex-col">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            {/* Icon or Avatar placeholder */}
          </div>
          <div className="flex-1">
            <div className="text-lg md:text-xl font-medium text-foreground/90 mb-3 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {post.date}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeSci;
