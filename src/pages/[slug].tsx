import Head from "next/head";
import { Box, Flex, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { CardCities } from "../components/CardCities";
import { CountryInfo } from "../components/CountryInfo";

type Continent = {
  id: string;
  name: string;
  description: string;
  countries: {
    id: number;
    name: string;
    capital: string;
    code: string;
    cities: {
      id: string;
      name: string;
      image: string;
    }[];
  }[];
  languages: number;
  totalCountries: number;
};

interface ContinentProps extends Continent {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Head>
        <title>{continent.name} | WorldTrip</title>
      </Head>

      <Box
        as="section"
        h={["150", "250", "500"]}
        position="relative"
        bgImage="url('https://images.unsplash.com/photo-1515784638688-3f7e90ebb446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=500&q=80')"
      >
        <Box
          w="100%"
          h="100%"
          position="absolute"
          bg="black"
          opacity="0.3"
        ></Box>
        <Box h="100%" py={[8, 16]} px={[12, 24]}>
          <Flex
            h="100%"
            align={["center", "center", "flex-end"]}
            justify={["center", "center", "flex-start"]}
          >
            <Text
              fontSize={[28, 36, 48]}
              fontWeight={["semibold", "bold"]}
              color="white"
              zIndex="1"
            >
              {continent.name}
            </Text>
          </Flex>
        </Box>
      </Box>
      <HStack as="section" w="100%" maxWidth={1480} mx="auto" my="12">
        <SimpleGrid
          gridTemplateColumns={["none", "none", "none", "repeat(2, 1fr)"]}
          spacing={[8, 16]}
          mx="4"
        >
          <Text
            fontSize={[14, 18]}
            color="gray.900"
            lineHeight={[6, 8]}
            textAlign="justify"
          >
            {continent.description}
          </Text>

          <CountryInfo
            countries={continent.totalCountries}
            languages={continent.languages}
          />
        </SimpleGrid>
      </HStack>
      <Flex direction="column" w="100%" maxWidth={1480} mx="auto" px="4">
        <Text as="h1" fontSize={[24, 32]} fontWeight={500} color="gray.900">
          Cidades +100
        </Text>

        <CardCities countries={continent.countries} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/continents/${slug}`
  );
  const continent = await response.json();

  if (!continent.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { slug: "north-america" } },
    { params: { slug: "south-america" } },
  ];

  return {
    paths,
    fallback: true,
  };
};
