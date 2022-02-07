import Link from "next/link";
import { useRouter } from "next/router";
//import styles from "./NavBar.module.css";
//way1)  className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
//way2)  className={[styles.link,router.pathname === "/about" ? styles.active : "",].join(" ")}
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
