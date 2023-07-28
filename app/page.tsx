import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <ul className={style.navbar}>
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h1 className={style.heading}>Main Page</h1>
    </>
  );
}
