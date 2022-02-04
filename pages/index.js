import Container from "../components/Container";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Rivers Code</title>
      </Head>
      <Container>
        <Heading as="h1">Rivers Code</Heading>
      </Container>
    </>
  );
}
