import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Title({ posts }) {
  console.log(posts);
  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className={styles.list}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Title;
