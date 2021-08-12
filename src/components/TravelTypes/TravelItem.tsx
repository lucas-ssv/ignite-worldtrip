import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { VscCircleFilled } from "react-icons/vsc";

interface TravelTypeItemProps {
  image: string;
  text: string;
}

export function TravelItem({ image, text }: TravelTypeItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
    md: true,
  });

  return (
    <Flex
      direction={["row", "column"]}
      mt="4"
      align="center"
      mx="8"
      w={["", "", "100%"]}
    >
      {isWideVersion ? (
        <Image src={image} alt="cocktail" />
      ) : (
        <Icon as={VscCircleFilled} color="yellow.800" mr="2" />
      )}
      <Text
        color="gray.900"
        mt={[0, 4]}
        fontWeight={["medium", "bold"]}
        fontSize={[18, 20]}
      >
        {text}
      </Text>
    </Flex>
  );
}
