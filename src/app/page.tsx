import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const studentList: string[] = ["Test", "Aman", "Mahesh", "Raj", "Suresh"];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          {studentList.map((item: string, index: number) => {
            return (
              <li key={index}>
                <Link href={`studentdetails/${item}`} key={item + index}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
