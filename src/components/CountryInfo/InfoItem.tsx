import { Flex, Text, Tooltip, Image } from "@chakra-ui/react";

interface InfoItemProps {
  number: number;
  text: string;
  tooltipText?: string;
}

export function InfoItem({ number, text, tooltipText }: InfoItemProps) {
  return (
    <Flex direction="column" align={["flex-start", "center"]}>
      <Text as="h2" fontSize={[24, 36, 48]} fontWeight={600} color="yellow.800">
        {number}
      </Text>
      <Flex align="center">
        <Text fontSize={[18, 20, 24]} fontWeight={600} color="gray.900">
          {text}
        </Text>
        {!!tooltipText && (
          <Tooltip
            hasArrow
            label={tooltipText}
            aria-label="A tooltip"
            bg="gray.900"
          >
            <Image src="images/info.svg" alt="info" ml="1" />
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
}
