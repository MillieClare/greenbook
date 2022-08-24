import getCountryString from "../utilities/countryFormat";

const CountryText = ({ country }: { country: string }) => {
  return <div>{getCountryString(country)}</div>;
};

export default CountryText;
