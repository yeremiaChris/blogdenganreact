import React from "react";

export default function Posts({ post }) {
  return <div>{post.body}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  //   mendapatkan path yang mau kita render berdasarkan posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  //   kita akan render paths ini pada saat built time
  //   fallback false artinya route lain harus 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
