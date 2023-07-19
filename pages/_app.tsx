import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  walletConnect,
  ConnectWallet,
  coinbaseWallet,
  localWallet,
  magicLink,
  metamaskWallet,
  paperWallet,
  safeWallet,
  smartWallet,
  useContract,
} from "@thirdweb-dev/react";
import {
  Polygon,
  EthereumClassic,
  Ethereum,
  Binance,
  Optimism,
  Dogechain,
  Arbitrum,
} from "@thirdweb-dev/chains";
import { Web3Button } from "@thirdweb-dev/react";
import "../styles/globals.css";
import React from "react";
import { Container, Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #3A619C, #65A6F3, #1F3996 )",
      }}
    >
      <ThirdwebProvider
        activeChain={activeChain}
        supportedChains={[
          EthereumClassic,
          Ethereum,
          Binance,
          Optimism,
          Polygon,
          Arbitrum,
          Dogechain,
        ]}
        supportedWallets={[
          metamaskWallet(),
          walletConnect(),
          coinbaseWallet(),
          safeWallet(),
        ]}
      >
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          
        </ChakraProvider>
      </ThirdwebProvider>
    </div>
    )
  }
  
  function Component() {
    const { contract, isLoading } = useContract("0x80B275ca1434EB942da1cAfC194663aD56f721f8");
  
  
}

export default MyApp;
