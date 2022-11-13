import { DateTime } from "luxon";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Post from "./components/Post/Post";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code With Cole</title>
        <meta name="description" content="Coding through time with Cole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Code With Cole</h1>
        <Post
          timestamp={DateTime.now().toLocaleString()}
          title={"Hello World!"}
          description={"Is this thing on?"}
        />
      </main>
    </div>
  );
}
