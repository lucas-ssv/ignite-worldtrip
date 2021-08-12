import { Flex } from "@chakra-ui/react";
import { InfoItem } from "./InfoItem";

interface CountryInfoProps {
  countries: number;
  languages: number;
}

export function CountryInfo({ countries, languages }: CountryInfoProps) {
  return (
    <Flex justify="space-evenly" align="center">
      <InfoItem number={countries} text="países" />
      <InfoItem number={languages} text="línguas" />
      <InfoItem number={27} text="cidades +100" tooltipText="+100 cidades" />
    </Flex>
  );
}
