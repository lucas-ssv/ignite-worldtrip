import Head from "next/head";
import { Divider, VStack, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { SwiperCarousel } from "../components/SwiperCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Banner />
      <TravelTypes />

      <Divider
        w="16"
        mx="auto"
        my={["8", "12"]}
        borderWidth="thin"
        borderColor="gray.900"
      />

      <VStack fontWeight="500" fontSize={[20, 24]} color="gray.900">
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </VStack>
      <SwiperCarousel />
    </>
  );
}
