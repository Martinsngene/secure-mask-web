/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import Logo from "@/components/logo";
import { LinkItemPropsI } from "@/components/interface";
import { AddNewCardBtn } from "@/components/buttons";
import Card from "@/components/cards";

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      {/* Sidebar for navigation */}
      <div className={styles.dashboard_sidebar}>
        {/* Logo Container */}
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <div className={styles.group_items_container}>
          <div className={styles.sidebar_item_one}>
            {/* List of Cards */}
            <LinkItem src='/card.svg' href='/' link_text='Cards' />

            {/* List of Transactions */}
            <LinkItem
              src='/transaction.svg'
              href='/'
              link_text='Transactions'
            />
          </div>

          <div className={styles.sidebar_item_two}>
            {/* Profile */}
            <LinkItem src='/profile.svg' href='/' link_text='Profile' />

            {/* Logout*/}
            <LinkItem src='/logout.svg' href='/' link_text='Logout' />
          </div>
        </div>
      </div>
      <div className={styles.dashboard_mainpage}>
        <AddNewCardBtn />
        <Card />
      </div>
    </div>
  );
};

// Link Item Component
const LinkItem = ({ href, src, link_text }: LinkItemPropsI) => {
  return (
    <Link href={href} passHref>
      <div className={styles.link_item_container}>
        <div>
          <Image src={src} alt='Link icon' width={30} height={30} />
        </div>
        <p className={styles.link_text}>{link_text}</p>
      </div>
    </Link>
  );
};

export default Dashboard;
