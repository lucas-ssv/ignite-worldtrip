import { SimpleGrid } from "@chakra-ui/react";
import { CountryFlag } from "../CountryFlag";
import { CardItem } from "./CardItem";

type Card = {
  id: number;
  name: string;
  capital: string;
  code: string;
  cities: {
    id: string;
    name: string;
    image: string;
  }[];
};

interface CardCitiesProps {
  countries: Card[];
}

export function CardCities({ countries }: CardCitiesProps) {
  return (
    <SimpleGrid as="article" minChildWidth="256px" spacing={12} my="12">
      {countries.map((country) =>
        country.cities.map((city) => (
          <CardItem
            key={city.id}
            image={city.image}
            cityName={city.name}
            countryName={country.name}
          >
            <CountryFlag countryCode={country.code.toLowerCase()} />
          </CardItem>
        ))
      )}
    </SimpleGrid>
  );
}
