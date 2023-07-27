"use client";

import { useRouter as router } from "next/navigation";
import style from "../page.module.css";

export default function page() {
  const route = router();

  return (
    <>
      <h2>About Page</h2>
      <button onClick={() => route.push("/")} className={style.button}>
        Home
      </button>
      <button onClick={() => route.push("/login")} className={style.button}>
        Login
      </button>
    </>
  );
}
