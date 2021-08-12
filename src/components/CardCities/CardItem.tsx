import { Box, Image, Flex, VStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CardItemProps {
  image: string;
  cityName: string;
  countryName: string;
  children: ReactElement;
}

export function CardItem({
  image,
  cityName,
  countryName,
  children,
}: CardItemProps) {
  return (
    <Box
      borderWidth={1}
      borderRadius={4}
      overflow="hidden"
      bg="white"
      borderColor="yellow.900"
    >
      <Image src={image} alt={cityName} w="100%" />
      <Box py="8" px="6">
        <Flex justify="space-between">
          <VStack align="flex-start">
            <Text as="h1" fontSize={20} fontWeight="600" color="gray.900">
              {cityName}
            </Text>
            <Text color="gray.700">{countryName}</Text>
          </VStack>
          {children}
        </Flex>
      </Box>
    </Box>
  );
}
