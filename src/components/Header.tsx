import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { VscChevronLeft } from "react-icons/vsc";

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      bg="gray.500"
      w="100%"
      maxWidth={1480}
      mx="auto"
      p={[4, 6]}
      align="center"
    >
      {router.asPath !== "/" && (
        <Link href="/">
          <ChakraLink position="absolute" onClick={() => history.back()}>
            <Icon as={VscChevronLeft} w={[6, 8]} h={[6, 8]} color="gray.900" />
          </ChakraLink>
        </Link>
      )}
      <Image src="/images/logo.svg" w={[100, 150]} mx="auto" alt="worldtrip" />
    </Flex>
  );
}
