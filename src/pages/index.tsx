import googleOneTap from "google-one-tap";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

import HandWithCard from "@/components/home/HandWithCard";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  // const [user, setUser] = useState({ loggedIn: null, addr: false });
  // const [name, setName] = useState("");
  // const { data: session } = useSession();
  // console.log(session);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  const options = {
    client_id:
      "101304120172-5gjo6sanp04544n3jjgg58csdu13sded.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: "signup", // optional
  };

  googleOneTap(options, (response: any) => {
    // Send response to server
    console.log(response);
  });

  return (
    <main className={`container mx-auto w-full h-[100vh] md:pl-[4rem]  flex`}>
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
