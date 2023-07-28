import Link from "next/link";
import style from "./about.module.css";

export default function Layout(props: any) {
  return (
    <div>
      <ul className={style.menubar}>
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
        <li>
          <Link href="/about/aboutteacher">About Teacher</Link>
        </li>
        <li>
          <Link href="/">&#60;- Go To Home</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
}
