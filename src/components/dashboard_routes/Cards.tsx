/** @format */

import React, { useState } from "react";

import styles from "./styles.module.css";
import Card from "../card";
import { AddNewCardBtn } from "../buttons";
import Modal from "../modal";
import AddNewCard from "../forms/AddNewCard";

const Cards = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const showModal = (val: boolean) => {
    setToggleModal(val);
  };
  return (
    <>
      {/* Opens modal for user to perform some action */}
      {toggleModal && (
        <Modal>
          <AddNewCard closeBtn={() => showModal(!toggleModal)} />
        </Modal>
      )}
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
        <AddNewCardBtn onClick={() => showModal(!toggleModal)} />
      </div>
    </>
  );
};

export default Cards;
