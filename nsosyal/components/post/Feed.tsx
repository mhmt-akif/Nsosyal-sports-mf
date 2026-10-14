"use client";

import { useState } from "react";
import PostCard, { type Post } from "./PostCard";
import PostComposer from "./PostComposer";

// Akış: gönderi listesi burada tutulur (state'i yukarı taşıma).
// PostComposer yeni gönderiyi onSubmit ile bildirir, Feed listeye ekler.
// Şimdilik sadece tarayıcıda: sayfa yenilenince yeni gönderiler kaybolur.
// Backend hazır olunca addPost içinde POST /api/posts çağrılacak.
export default function Feed({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function addPost(text: string) {
    const newPost: Post = {
      id: Date.now(), // geçici benzersiz id; gerçeği backend'den gelecek
      author: { name: "Sen", username: "kullanici", verified: false },
      timeAgo: "şimdi",
      text,
      stats: { comments: 0, reposts: 0, likes: 0, views: 0 },
    };
    // yeni gönderi en üste; mevcut diziyi değiştirmeden yeni bir dizi oluştur
    setPosts([newPost, ...posts]);
  }

  return (
    <section className="overflow-hidden rounded-t-2xl bg-panel">
      <PostComposer onSubmit={addPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
