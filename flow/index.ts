/** @format */

import * as fcl from "@onflow/fcl";

const result = await fcl.query({
  cadence: `
    pub fun main(a: Int, b: Int, addr: Address): Int {
      log(addr)
      return a + b
    }
  `,
  args: (arg, t: any) => [
    arg(7, t.Int), // a: Int
    arg(6, t.Int), // b: Int
    arg("0x1868ccdfcc69a0dc", t.Address), // addr: Address
  ],
});
console.log(result); // 13
