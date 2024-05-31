"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [user, setUser] = useState("Levis");
  const data = "Pieman";
  const update = () => {
    setUser("Carlos");
  };

  useEffect(() => {
    console.log("prueba del effect")
  }, [user]);

  return (
    <main className={styles.main}>
      {/* <Page name="first" />
      <Page name="second" />
      <Page name="third" />
      <Page name="fourth" /> */}

      <h1>Hello Word {user}</h1>
      <button onClick={() => update()}>Click here</button>
    </main>
  );
}

const Page = (props) => {
  return <div>{props.name} page</div>
}