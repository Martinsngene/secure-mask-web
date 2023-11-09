/** @format */
import keccak256 from "keccak256";

const hash = keccak256(Buffer.from("John" + "Doe" + "08/23" + "Visa")).toString(
  "hex"
);
console.log(hash);

//Function To Add A New Card
const addNewCard = (cardDetails: any) => {
  // 1. First collect new card details
  // 2. Save Card Details State.
  // 3. Create CardAddress with keccak256
  // 4. Base64 Encrypt Card Details object
  // 5. Create New Object to contain Card Address and Encrypted Card Details
  // 6. Mutate Blockchain by saving New Object in the blockchain
};
