"use client";

import { useRouter as router } from "next/navigation";
import style from "../page.module.css";

export default function page() {
  const route = router();

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={() => route.push("/")} className={style.button}>
        Home
      </button>
      <button onClick={() => route.push("/about")} className={style.button}>
        About
      </button>
    </>
  );
}
