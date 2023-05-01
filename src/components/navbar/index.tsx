/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <Image src='/logo.svg' alt='logo' width={40} height={40} />
        <span className=''>SecureMask</span>
      </div>
    </div>
  );
};

export default Navbar;
