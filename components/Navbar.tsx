import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <Container maxW={"1000px"} py={1} centerContent>
      <Flex direction="row" justifyContent="space-between" align="center">
        <ConnectWallet style={{ backgroundColor: "#C7DDFF" }} />
      </Flex>
    </Container>
  );
}
