import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/Banner";
import Card from "../components/card";

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log("hi banner button");
  };
  return (
    <div className={styles.container}>
      <head>
        <title>Coffee Connoisseur</title>
      </head>
      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerButtonClick}
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            width={700}
            height={400}
            alt='main-image'
          />
        </div>
        <div className={styles.cardLayout}>
          <Card
            name='DarkHorse Coffee'
            imgUrl='/static/hero-image.png'
            href='/coffee-store/darkhorse-coffee'
            className={styles.card}
          />
          <Card
            name='DarkHorse Coffee'
            imgUrl='/static/hero-image.png'
            href='/coffee-store/darkhorse-coffee'
            className={styles.card}
          />
        </div>
      </main>
    </div>
  );
}
