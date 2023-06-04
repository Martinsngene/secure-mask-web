/** @format */

import React, { useState } from "react";

import styles from "./styles.module.css";
import Card from "../card";
import { AddNewCardBtn } from "../buttons";
import Modal from "../modal";
import AddNewCard from "../forms/AddNewCard";
import CardDetails from "../forms/CardDetails";
import { testCards } from "../test-data";

const Cards = () => {
  const [addCard, setAddCard] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const showModal = (val: boolean) => {
    setAddCard(val);
  };

  const showCardDetails = (val: boolean) => {
    setShowDetails(val);
  };
  return (
    <>
      {/* Opens the add card form */}
      {addCard && (
        <Modal>
          <AddNewCard closeBtn={() => showModal(!addCard)} />
        </Modal>
      )}
      {/* Opens the show details modal */}
      {showDetails && (
        <Modal>
          <CardDetails closeBtn={() => showCardDetails(!showDetails)} />
        </Modal>
      )}
      <h2 className={styles.header}>Cards</h2>
      <div className={styles.cards_container}>
        {testCards.map((card, index: number) => {
          return (
            <Card
              onClick={() => showCardDetails(!showDetails)}
              cardType={card.cardType}
              cardBg={card.cardBg}
              isHome={false}
              key={index}
            />
          );
        })}
        {/* Button to add a new card */}
        <AddNewCardBtn onClick={() => showModal(!addCard)} />
      </div>
    </>
  );
};

export default Cards;
