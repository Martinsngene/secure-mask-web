/** @format */

import React from "react";
import Image from "next/image";

import styles from "./AddNewCard.module.css";
import { SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";
import Select from "../customSelect";
import { CardTypes } from "../constants";
import { AddNewCardPropsI } from "../interface";

const AddNewCard = ({ closeBtn }: AddNewCardPropsI) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />

          <button onClick={closeBtn}>
            <Image
              src='/close.svg'
              alt='Cancel Action button'
              width={25}
              height={25}
            />
          </button>
        </div>
        <h1 className={styles.header}>Add a new card</h1>
        <p className={styles.welcome_text}>
          Secure your card with an encrypted mask.
        </p>
        <div className={styles.name_container}>
          <div className={styles.first_name}>
            <label className={styles.label} htmlFor='cardName'>
              Card Name
            </label>
            <input
              className={styles.input}
              id='cardName'
              placeholder='Enter your card name'
              type='text'
            />
          </div>
          <div className={styles.last_name}>
            <label className={styles.label} htmlFor='expiryDate'>
              Expiry Date
            </label>
            <input
              className={styles.input}
              id='expiryDate'
              placeholder='Enter your expiry date'
              type='text'
            />
          </div>
        </div>
        <div className={styles.name_container}>
          <div className={styles.first_name}>
            <label className={styles.label} htmlFor='cardType'>
              Card Type
            </label>
            <Select defaultValue='Visa' itemsList={CardTypes} />
          </div>
          <div className={styles.last_name}>
            <label className={styles.label} htmlFor='cvvNumber'>
              CVV
            </label>
            <input
              className={styles.input}
              id='cvvNumber'
              placeholder='Enter your cvv number'
              type='text'
            />
          </div>
        </div>
        <div>
          <label className={styles.label} htmlFor='cardNumber'>
            Card Number
          </label>
          <input
            className={styles.input}
            id='cardNumber'
            placeholder='Enter your card number'
            type='text'
          />
        </div>
        <div>
          <SubmitBtn className='mb-8' label='Add New Card' />
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
