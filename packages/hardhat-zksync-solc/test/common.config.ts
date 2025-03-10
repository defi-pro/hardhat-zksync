import '../src/index';
import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.1.6",
    compilerSource: "binary",
  },
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: process.env.SOLC_VERSION || "0.8.12"
  }
};

export default config;
