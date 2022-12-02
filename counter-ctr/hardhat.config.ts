import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
      frontier: {
          url: "http://localhost:9933",
          accounts: ["99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342"],
          chainId: 500,
      }
  }
};

export default config;
