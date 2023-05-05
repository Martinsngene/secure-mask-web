/** @format */

import React from "react";

import styles from "./styles.module.css";
import Card from "../card";
import { AddNewCardBtn } from "../buttons";

const Cards = () => {
  return (
    <div>
      <h2 className={styles.header}>Cards</h2>
      <div className={styles.cards_container}>
        <Card
          cardType='/visa.svg'
          cardBg='/card_template_1.svg'
          isHome={false}
        />
        <Card
          cardType='/mastercard.svg'
          cardBg='/card_template_2.svg'
          isHome={false}
        />
        <Card
          cardType='/visa.svg'
          cardBg='/card_template_3.svg'
          isHome={false}
        />
        <Card
          cardType='/mastercard.svg'
          cardBg='/card_template_4.svg'
          isHome={false}
        />
        <Card
          cardType='/visa.svg'
          cardBg='/card_template_5.svg'
          isHome={false}
        />
        <Card
          cardType='/mastercard.svg'
          cardBg='/card_template_6.svg'
          isHome={false}
        />
        <AddNewCardBtn />
      </div>
    </div>
  );
};

export default Cards;
