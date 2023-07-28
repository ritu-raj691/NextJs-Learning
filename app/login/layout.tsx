import Link from "next/link";
import style from "./login.module.css";

export default function Layout(props: any) {
  return (
    <div>
      <ul className={style.menubar}>
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Student Login</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher Login</Link>
        </li>
        <li>
          <Link href="/">&#60;- Go To Home</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
}
