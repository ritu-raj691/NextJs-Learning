import Link from "next/link";
import style from './page.module.css'

export default function Home() {
  return (
    <>
      <h2>Main Page</h2>
      <ul className={style.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
