/** @format */

import HandWithCard from "@/components/home/HandWithCard";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar";
import * as fcl from "@onflow/fcl";

fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "discovery.authn.endpoint":
    "https://fcl-discovery.onflow.org/api/testnet/authn",
});

fcl.authenticate();

const testFCL = async () => {
  // in the browser, FCL will automatically connect to the user's wallet to request signatures to run the transaction
  // const txId = await fcl.mutate({
  //   cadence: `
  //   import Profile from 0xba1132bc08f82fe2

  //   transaction(name: String) {
  //     prepare(account: AuthAccount) {
  //       account.borrow<&{Profile.Owner}>(from: Profile.privatePath)!.setName(name)
  //     }
  //   }
  // `,
  //   args: (arg, t) => [arg("Martins Ngene", t)],
  // });

  const currentUser = await fcl.currentUser.snapshot();
  console.log("The Current User", currentUser);
};

testFCL();

export default function Home() {
  return (
    <main className={`container mx-auto w-full h-[100vh] md:pl-[4rem] flex`}>
      <Navbar />
      <div className='w-full md:w-[55%] h-full flex items-center justify-center'>
        <Hero />
      </div>
      <div className='hidden md:block w-[45%] h-[100vh]'>
        <HandWithCard />
      </div>
    </main>
  );
}
