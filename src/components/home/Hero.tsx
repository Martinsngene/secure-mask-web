/** @format */

import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "../buttons";

const Hero = () => {
  return (
    <div className={` ${styles.hero_container}`}>
      <h1 className={styles.header}>
        All the <strong>security</strong> assurance you need in a credit card
      </h1>
      <div className={styles.imageContainer}>
        <Image src='/home_arrow.svg' alt='arrow' width={60} height={120} />
      </div>
      <p className={styles.welcomeText}>
        Simple transfers, payments for utilities, functional statemement, card
        settings, for which you used to have to go to the branch online-banking
      </p>
      <div className={styles.btnContainer}>
        <Button href='/sign_up' label='Open your account' isFilled />
        <Button href='/sign_in' label='Sign in' isFilled={false} />
      </div>
    </div>
  );
};

export default Hero;
