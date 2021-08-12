import { CircleFlag, CircleFlagProps } from "react-circle-flags";

interface CountryFlagProps extends CircleFlagProps {
  countryCode: string;
}

export function CountryFlag({ countryCode }: CountryFlagProps) {
  return <CircleFlag countryCode={countryCode} height="30" width="30" />;
}
