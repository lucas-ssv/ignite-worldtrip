import { TravelItem } from "./TravelItem";
import { TravelSection } from "./TravelSection";

export function TravelTypes() {
  return (
    <TravelSection>
      <TravelItem image="/images/cocktail.svg" text="vida noturna" />
      <TravelItem image="/images/surf.svg" text="praia" />
      <TravelItem image="/images/building.svg" text="moderno" />
      <TravelItem image="/images/museum.svg" text="clássico" />
      <TravelItem image="/images/earth.svg" text="e mais..." />
    </TravelSection>
  );
}
