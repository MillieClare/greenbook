import ReactCountryFlag from "react-country-flag";
import { countryList } from "./countryList";
import Emoji from "./../components/emoji";

export const getCountryString = (country: string) => {
  let countryFlag = null;
  let countryCode =
    countryList.find((entry) => entry.name === country)?.code || null;

  if (countryCode) {
    countryFlag = <ReactCountryFlag countryCode={countryCode} svg />;
  }

  if (countryFlag) {
    return `${countryFlag} ${country}`;
  }

  return `${(<ReactCountryFlag countryCode={"GB"} svg />)} ${country}`;
};

export const getCountryFlag = (country: any) => {
  const countryFlag =
    countryList.find((entry) => entry.name === country)?.flag || "🏳️‍🌈";
  return <Emoji emoji={countryFlag} />;
};
