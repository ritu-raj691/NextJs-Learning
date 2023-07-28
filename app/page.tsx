import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2>Main Page</h2>
      <ul className={style.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={style.nestedNavbar}>
          <Link href="/login">Login</Link>
          <Link href="/login/loginstudent">Login Student</Link>
          <Link href="/login/loginteacher">Login Teacher</Link>
        </li>
        <li className={style.nestedNavbar}>
          <Link href="/about">About</Link>
          <Link href="/about/aboutstudent">About Student</Link>
          <Link href="/about/aboutteacher">About Teacher</Link>
        </li>
      </ul>
    </>
  );
}
