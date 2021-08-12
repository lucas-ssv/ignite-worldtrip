import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

interface SwiperSlideLinkProps extends ChakraLinkProps {
  href: string;
  title: string;
  description: string;
  image: string;
}

export function SwiperSlideLink({
  href,
  title,
  description,
  image,
  ...rest
}: SwiperSlideLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ textDecoration: "none" }} {...rest}>
        <Box
          bgImage={`url(${image})`}
          h={["250", "450"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={12}
          w="100%"
        >
          <Box
            w="100%"
            h="100%"
            position="absolute"
            bg="black"
            opacity="0.5"
          ></Box>
          <VStack zIndex="1">
            <Text color="gray.500" fontSize={[24, 32]} fontWeight="bold">
              {title}
            </Text>
            <Text
              color="gray.600"
              fontSize={[14, 20]}
              textAlign="center"
              fontWeight="bold"
            >
              {description}
            </Text>
          </VStack>
        </Box>
      </ChakraLink>
    </Link>
  );
}
