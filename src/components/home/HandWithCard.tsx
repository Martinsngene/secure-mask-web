/** @format */

import React from "react";

import styles from "./styles.module.css";
import Card from "../card";

const HandWithCard = () => {
  return (
    <div className={`${styles.hand_container}`}>
      <div className={styles.card_container}>
        <Card
          cardType='/visa.svg'
          cardBg='/card_template_home.svg'
          isHome={true}
        />
      </div>
    </div>
  );
};

export default HandWithCard;
