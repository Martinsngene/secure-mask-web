/** @format */

import React from "react";

import { SubmitBtn } from "@/components/buttons";
import styles from "./styles.module.css";
import Logo from "@/components/logo";

const Verify = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <h1 className={styles.header}>Verify Code</h1>
        <p className={styles.welcome_text}>
          Please enter the code sent to <strong>janedoe@gmail.com</strong>
        </p>
        <div>
          <input
            className={styles.input}
            id='verifyWithCode'
            placeholder='Enter your verification code'
            type='password'
          />
        </div>
        <div>
          <SubmitBtn className='mb-8' label='Verify' />
        </div>
      </div>
    </div>
  );
};

export default Verify;
