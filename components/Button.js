import React from "react";
import { useRouter } from "next/router";
import styles from "./button.module.css";

export default function Button() {
  const router = useRouter();
  return (
    <div>
      <button className={styles.button} onClick={() => router.push("/")}>
        Home
      </button>
      <button className={styles.button} onClick={() => router.push("/about")}>
        about
      </button>
      <button className={styles.button} onClick={() => router.push("/contact")}>
        contact
      </button>
    </div>
  );
}
