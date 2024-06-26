"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState("Levis");
  const data = "Pieman";
  const update = () => {
    setUser("Carlos");
  };

  useEffect(() => {
    console.log("prueba del effect");
  }, [user]);

  const router = useRouter();
  const navigation = (blog) => {
    router.push("/blog/" + blog)
  }
  return (
    <main className={styles.main}>
      {/* <Page name="first" />
      <Page name="second" />
      <Page name="third" />
      <Page name="fourth" /> */}

      <h1>Hello World {user}</h1>
      <button onClick={() => navigation("newblog")}>Click here blog-new</button>
      <button onClick={() => router.push("/login-form")}>Click here login</button>
      <button onClick={() => router.push("/API")}>Click here to API</button>
      <button onClick={() => router.push("/serverAPI")}>Click here to serverAPI</button>
      {/* <Link href="">go to Blogs</Link> */}
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} page</div>;
}
