"use client";

import { useRouter as router } from "next/navigation";
import style from "../about.module.css";

export default function page() {
  const route = router();

  return <h1 className={style.heading}>About Teacher Page</h1>;
}
