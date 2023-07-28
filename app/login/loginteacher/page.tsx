"use client";

import { useRouter as router } from "next/navigation";
import style from "../login.module.css";

export default function page() {
  const route = router();

  return <h1 className={style.heading}>Login Teacher Page</h1>;
}
