/** @format */

import { useAuth } from "../../../contexts/AuthContext";
import "../../../flow/config";

import Link from "next/link";
import Profile from "../profile";

function Landing() {
  const {
    currentUser,
    profileExists,
    logOut,
    logIn,
    signUp,
    createProfile,
  }: any = useAuth();

  const AuthedState = () => {
    return (
      <div>
        <div>Logged in as: {currentUser?.addr ?? "No Address"}</div>
        <button onClick={logOut}>Log Out</button>

        <h2>Controls</h2>
        <button onClick={createProfile}>Create Profile</button>
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <button onClick={logIn}>Log In</button>
        <button onClick={signUp}>Sign Up</button>
      </div>
    );
  };

  const Messages = () => {
    return (
      <div>
        {!currentUser?.loggedIn
          ? "Get started by logging in or signing up."
          : profileExists
          ? "Your Profile lives on the blockchain."
          : "Create a profile on the blockchain."}
      </div>
    );
  };

  return (
    <div>
      <div className='grid'>
        <div>
          <h1>
            Welcome to <Link href='https://docs.onflow.org'>Web3</Link>
          </h1>
          <div>
            <Messages />
          </div>
          {profileExists && <Profile />}
        </div>
        <div>
          {currentUser?.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
        </div>
      </div>
    </div>
  );
}

export default Landing;
