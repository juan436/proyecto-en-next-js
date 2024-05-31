"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const color = (picker) => {
    alert(picker);
  };
  return (
    <main className={styles.main}>
      {/* <Page name="first" />
      <Page name="second" />
      <Page name="third" />
      <Page name="fourth" /> */}

      <h1>Hello Word</h1>
      <button onClick={() => color("yellow")} >Click here</button>
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} page</div>
}