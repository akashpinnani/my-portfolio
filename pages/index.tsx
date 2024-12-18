import Head from "next/head";
import { CopyrightFooter } from "../components/copyrightFooter";
import { HomeLinks } from "../components/homeLinks";
import { Introduction } from "../components/introduction/introduction";
import { NavLinksContainer } from "../components/navbar/navLinksContainer";
import { ProfileImage } from "../components/profileImage";
import { Skills } from "../components/skills/skills";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Akash Pinnani</title>
          <meta name="description" content="Akash Pinnani Profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavLinksContainer />
        <div className={styles.introContainer}>
          <HomeLinks />
          <div className={styles.introductionContainer}>
            <Introduction />
          </div>
          <div className={styles.profileImageWrapper}>
            <ProfileImage />
          </div>
        </div>
      </div>
      <div className={styles.container} id="skills">
        <Skills />
      </div>

      {/* <div className={styles.container} id="contact">
        <Contact />
      </div> */}
      <CopyrightFooter />
    </>
  );
}
