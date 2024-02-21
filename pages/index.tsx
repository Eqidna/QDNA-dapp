import { ConnectWallet, useAddress, ThirdwebProvider, useContract, useMetadata } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Heading, Flex, Box, Center } from "@chakra-ui/react";
import EqidnaTokenBalance from "../components/EqidnaToken";
import Airdrop from "../components/Airdrop";
import Mint from "../components/Mint";
import Stake from "../components/Stake";
import ClaimReward from "../components/ClaimReward";
import Unstake from "../components/Unstake";
import LatestTransactions from "../components/LatestTransactions";

const contractAddress = "0x80B275ca1434EB942da1cAfC194663aD56f721f8";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useMetadata(contract);

  return (
    <>
      {address ? (
        <Container maxW="500px">
          <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
            <Box>
              <EqidnaTokenBalance />
            </Box>
          
            <Box>
              <Airdrop />
            </Box>
            
            <Box>
              <Mint />
            </Box>
            
            <Box>
              <Stake />
            </Box>

             <Box>
              <ClaimReward />
            </Box>
            
             <Box>
              <Unstake />
            </Box>
            
             <Box>
             <LatestTransactions />
            </Box>
            
          </Flex>
         
        </Container>
      ) : (
        <Container maxW="1200px" centerContent>
          <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>

          <Heading color="black" fontSize="20px">Welcome to The Eqidna Project.</Heading>

          <Flex h="10vh" justifyContent="center" alignItems="center">
            <Heading color="white" fontSize="25px">Please connect your wallet!</Heading>
          </Flex>
        </Container>
      )}

<Container maxW="1200px">
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={`${styles.title} ${styles.reduceSpace}`}>
        EQIDNA TOKEN{" "}
        <a href="https://polygonscan.com/address/0x80B275ca1434EB942da1cAfC194663aD56f721f8" className={styles.link} target="_blank">
          <span className={styles.description} style={{ color: "WHITE", fontSize: "35px", fontWeight: "bold" }}>
            $QDNA!
          </span>
        </a>
      </h1>
      <p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "WHITE", wordWrap: "break-word", fontWeight: "bold" }}>
        Join the tribe and reap the rewards with #Eqidna.{" "}
        <code className={styles.code}>$QDNA</code>
      </p>
      <p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "black", wordWrap: "break-word" }}>
        Eqidna allows you to stake and mint rewards directly from your wallet.
      </p>

      <div className={styles.connect}></div>
      <div className={styles.grid}>
        <a href="https://qdna-info-eqidna.vercel.app/" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Learn more.
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            Want to know more about Eqidna? Click here!
          </p>
        </a>
        
        <a href="https://opensea.io/collection/eqidnaai" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Eqidna NFTs
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            Check out our collection of AI Generated NFTs.
          </p>
        </a>
      
        <a href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0x80B275ca1434EB942da1cAfC194663aD56f721f8&chainId=137" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            BUY $QDNA
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            Now Available on Uniswap, Polygon Mainnet. More exchanges to be added!
          </p>
        </a>

        <a href="https://polygonscan.com/address/0x80B275ca1434EB942da1cAfC194663aD56f721f8" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Polygonscan $QDNA
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            View the Contract Overview, execute functions, view tx and more.
          </p>
        </a>

        <a href="https://www.dextools.io/app/en/polygon/pair-explorer/0x4bef74d14df84fd524732d41e0241b1ef894e50f" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Dextools $QDNA
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            View the Trades, chart, holders and more.
          </p>
        </a>

        <a href="https://twitter.com/EqidnaTokenQDNA" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Follow @EqidnaTokenQDNA
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            Stay up to date on all things #Eqidna $QDNA.
          </p>
        </a>
      </div>

      <a href="https://github.com/Eqidna" className={`${styles.card} ${styles.sameSize}`} target="_blank">
        <h2 className={styles.heading} style={{ color: "white" }}>
          github @Eqidna
        </h2>
        <p className={styles.paragraph} style={{ color: "white" }}>View our code! #Eqidna $QDNA.
        </p>
      </a>

      <a href="https://www.coingecko.com/" className={`${styles.card} ${styles.sameSize}`} target="_blank">
        <h2 className={styles.heading} style={{ color: "white" }}>
          Coingecko $QDNA
        </h2>
        <p className={styles.paragraph} style={{ color: "white" }}>
          Coming Soon. Stay Tuned!
        </p>
      </a>
      
      <div className={styles.connect}></div>
      <div className={styles.grid}>
        <p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "white" }}>
          {" "}
          <code className={styles.code}>Welcome to The Eqidna Project.</code>
        </p>
      </div>
    </main>
  </div>
</Container>

    </>
  );
};

export default Home;
