import {
  Box,
  Image,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box
      bgImage="url('/images/background.jpg')"
      display="flex"
      py={["8", "16"]}
      position="relative"
      px={["4", "8", "12", "32"]}
      h={["163", "200", "245", "335"]}
    >
      <Flex as="section" w="100%" justify={["center", "space-between"]}>
        <VStack align="flex-start" justify="center" w="100%">
          <Text
            fontSize={[20, 24, 32, 36]}
            fontWeight="medium"
            color="gray.500"
          >
            5 Continentes, <br />
            infinitas possibilidades
          </Text>
          <Text fontSize={[14, 16, 18, 20]} color="gray.600">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        {isWideVersion && (
          <Box w="100%">
            <Image
              src="/images/airplane.svg"
              position="absolute"
              right="48"
              bottom={-10}
              alt="Airplane"
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
