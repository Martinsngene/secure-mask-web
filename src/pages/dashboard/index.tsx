/** @format */

import React, { useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import Logo from "@/components/logo";
import { LinkItemPropsI } from "@/components/interface";
import Cards from "@/components/dashboard_routes/Cards";
import Transactions from "@/components/dashboard_routes/Transactions";
import Profile from "@/components/dashboard_routes/Profile";
import Link from "next/link";

const Dashboard = () => {
  // useState to control the state of the mainpage
  const [currentView, setCurrentView] = useState(0);

  // Function to dispatch SetState Action
  const updateCurrentView = (val: number) => setCurrentView(val);

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
            <LinkItem
              onClick={() => updateCurrentView(0)}
              src='/card.svg'
              link_text='Cards'
            />

            {/* List of Transactions */}
            <LinkItem
              src='/transaction.svg'
              link_text='Transactions'
              onClick={() => updateCurrentView(1)}
            />
          </div>

          <div className={styles.sidebar_item_two}>
            {/* Profile */}
            <LinkItem
              onClick={() => updateCurrentView(2)}
              src='/profile.svg'
              link_text='Profile'
            />

            {/* Logout*/}
            <Link href='/sign_out' passHref>
              <LinkItem src='/logout.svg' link_text='Logout' />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_mainpage}>
        {currentView === 0 ? (
          <Cards />
        ) : currentView === 1 ? (
          <Transactions />
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
};

// Link Item Component
const LinkItem = ({ onClick, src, link_text }: LinkItemPropsI) => {
  return (
    <button onClick={onClick}>
      <div className={styles.link_item_container}>
        <div>
          <Image src={src} alt='Link icon' width={30} height={30} />
        </div>
        <p className={styles.link_text}>{link_text}</p>
      </div>
    </button>
  );
};

export default Dashboard;
