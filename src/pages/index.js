import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import React, { useEffect } from "react";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to CloudBankin Documentation !
        </Heading>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/intro">
            LOS-Under Review
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
