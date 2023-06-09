/** @format */
import * as fcl from "@onflow/fcl";
import { useEffect, useState } from "react";

import "../../flow/config";
import HandWithCard from "@/components/home/HandWithCard";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null, addr: false });
  const [name, setName] = useState("");
  useEffect((): any => fcl.currentUser.subscribe(setUser), []);
  const AuthedState = () => {
    return (
      <div>
        <div>Address: {user?.addr ?? "No Address"}</div>
        <div>Profile Name: {name ?? "--"}</div> {/* NEW */}
        <button onClick={sendQuery}>Send Query</button>
        <br /> {/* NEW */}
        <button onClick={initAccount}>Init Account</button> <br />
        {/* NEW */}
        <button onClick={fcl.unauthenticate}>Log Out</button>
        <br />
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <button onClick={fcl.logIn}>Log In</button>
        <button onClick={fcl.signUp}>Sign Up</button>
      </div>
    );
  };

  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t: any) => [arg(user.addr, t.Address)],
    });

    setName(profile?.name ?? "No Profile");
  };

  const initAccount = async () => {
    // const transactionId = await fcl.mutate({
    //   cadence: `
    //     import Profile from 0xProfile
    //     transaction {
    //       prepare(account: AuthAccount) {
    //         // Only initialize the account if it hasn't already been initialized
    //         if (!Profile.check(account.address)) {
    //           // This creates and stores the profile in the user's account
    //           account.save(<- Profile.new(), to: Profile.privatePath)
    //           // This creates the public capability that lets applications read the profile's info
    //           account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
    //         }
    //       }
    //     }
    //   `,
    //   payer: fcl.authz,
    //   proposer: fcl.authz,
    //   authorizations: [fcl.authz],
    //   limit: 50,
    // });
    // const transaction = await fcl.tx(transactionId).onceSealed();
    // console.log(transaction);
  };

  return (
    <main className={`container mx-auto w-full h-[100vh] md:pl-[4rem] flex`}>
      <Navbar />
      <div className='w-full md:w-[55%] h-full flex items-center justify-center'>
        <Hero />
      </div>
      <div className='hidden md:block w-[45%] h-[100vh]'>
        <HandWithCard />
        <h1>Flow App</h1>
        {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
      </div>
    </main>
  );
}
