import { Flex, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelTypeSectionProps {
  children: ReactNode;
}

export function TravelSection({ children }: TravelTypeSectionProps) {
  return (
    <Flex
      as="main"
      w="100%"
      maxWidth={1480}
      mx="auto"
      mt="12"
      justify="center"
      wrap={["wrap", "wrap", "initial"]}
    >
      {children}
    </Flex>
  );
}
