/** @format */

import React from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

import styles from "./styles.module.css";
import { SignInWithGoogleBtn, SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";

const SignIn = () => {
  // Get Session
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <h1 className={styles.header}>Welcome back</h1>
        <p className={styles.welcome_text}>
          Welcome back! Please enter your details.
        </p>
        <div>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <input
            className={styles.input}
            id='email'
            placeholder='Enter your email'
            type='text'
          />
        </div>
        <div>
          <SubmitBtn className='mb-8' label='Continue' />
          <SignInWithGoogleBtn
            onClick={() => signIn()}
            label='Sign in with Google'
          />
        </div>
        <div className={styles.cta_container}>
          <p className={styles.cta}>Don&apos;t have an account? </p>
          <Link href='/sign_up' passHref>
            <p className={styles.signup_text}> Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
