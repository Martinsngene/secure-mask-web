/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";
import { NavItems } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <Image src='/logo.svg' alt='logo' width={40} height={40} />
        <span className={styles.logo}>SecureMask</span>
      </div>
      {/* Navigation Links */}
      <div className={styles.links_container}>
        {NavItems.map((item) => (
          <Link href={item.link}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
