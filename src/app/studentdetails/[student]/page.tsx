"use client";
import styles from "../../page.module.css";
import Link from "next/link";

export default function page(props: any) {
  return (
    <main className={styles.main}>
      <div>
        <h1>Student Details</h1>
        <p className={styles.center}>Name: {props.params.student}</p>
        <Link className={styles.center} href="/">
          &#60;-Back To Home
        </Link>
      </div>
    </main>
  );
}
