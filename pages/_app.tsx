
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import {
  walletConnect,
  ConnectWallet,
  coinbaseWallet,
  localWallet,
  magicLink,
  metamaskWallet,
  paperWallet,
  safeWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import {
  Polygon,
  Ethereum,
  Binance,
  Optimism,
  EthereumClassic,
  Dogechain,
  Arbitrum,
} from "@thirdweb-dev/chains";
import { Web3Button } from "@thirdweb-dev/react";
import "../styles/globals.css";
import React from "react";
import { Container, Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #3A619C, #65A6F3, #1F3996 )",
      }}
    >
      < ThirdwebProvider
      activeChain="polygon"
      clientId="eb54bc7719937d0bb2c9c0693d42423c" // You can get a client id from dashboard settings
      supportedChains={[
        Polygon,
        Ethereum,
        Binance,
        Optimism,
        EthereumClassic,
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
    );
  }

 

export default MyApp;
