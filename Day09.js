var country = [
  {
    name: "Afghanistan",
    callingCodes: ["93"],
    capital: "Kabul",
    altSpellings: ["AF", "Afġānistān"],
    region: "Asia",
    subregion: "Southern Asia",
    borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
    nativeName: "افغانستان",
    numericCode: "004",
    currencies: "AFN",
    languages: [
      { iso639_1: "ps", iso639_2: "pus", name: "Pashto", nativeName: "پښتو" },
      { iso639_1: "uz", iso639_2: "uzb", name: "Uzbek", nativeName: "Oʻzbek" },
      {
        iso639_1: "tk",
        iso639_2: "tuk",
        name: "Turkmen",
        nativeName: "Türkmen",
      },
    ],
    flag: "https://restcountries.eu/data/afg.svg",
  },
  {
    name: "Åland Islands",
    callingCodes: ["358"],
    capital: "Mariehamn",
    region: "Europe",
    subregion: "Northern Europe",
    population: 28875,
    demonym: "Ålandish",
    nativeName: "Åland",
    numericCode: "248",
    currencies: "EUR",
    languages: [
      {
        iso639_1: "sv",
        iso639_2: "swe",
        name: "Swedish",
        nativeName: "svenska",
      },
    ],
    flag: "https://restcountries.eu/data/ala.svg",
  },
  {
    name: "Albania",
    callingCodes: ["355"],
    capital: "Tirana",
    region: "Europe",
    subregion: "Southern Europe",
    population: 2886026,
    demonym: "Albanian",
    borders: ["MNE", "GRC", "MKD", "KOS"],
    nativeName: "Shqipëria",
    numericCode: "008",
    currencies: "ALL",
    languages: [
      {
        iso639_1: "sq",
        iso639_2: "sqi",
        name: "Albanian",
        nativeName: "Shqip",
      },
    ],
    flag: "https://restcountries.eu/data/alb.svg",
  },
  {
    name: "Algeria",
    callingCodes: ["213"],
    capital: "Algiers",
    region: "Africa",
    subregion: "Northern Africa",
    population: 40400000,
    demonym: "Algerian",
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    nativeName: "الجزائر",
    numericCode: "012",
    currencies: "DZD",
    languages: [
      {
        iso639_1: "ar",
        iso639_2: "ara",
        name: "Arabic",
        nativeName: "العربية",
      },
    ],
    flag: "https://restcountries.eu/data/dza.svg",
  },
  {
    name: "American Samoa",
    callingCodes: ["1684"],
    capital: "Pago Pago",
    region: "Oceania",
    subregion: "Polynesia",
    population: 57100,
    demonym: "American Samoan",
    timezones: ["UTC-11:00"],
    nativeName: "American Samoa",
    numericCode: "016",
    currencies: "USD",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "sm",
        iso639_2: "smo",
        name: "Samoan",
        nativeName: "gagana fa'a Samoa",
      },
    ],
    flag: "https://restcountries.eu/data/asm.svg",
  },
  {
    name: "Andorra",
    callingCodes: ["376"],
    capital: "Andorra la Vella",
    region: "Europe",
    subregion: "Southern Europe",
    population: 78014,
    demonym: "Andorran",
    nativeName: "Andorra",
    numericCode: "020",
    currencies: "EUR",
    languages: [
      {
        iso639_1: "ca",
        iso639_2: "cat",
        name: "Catalan",
        nativeName: "català",
      },
    ],
    flag: "https://restcountries.eu/data/and.svg",
  },
  {
    name: "Angola",
    callingCodes: ["244"],
    capital: "Luanda",
    region: "Africa",
    subregion: "Middle Africa",
    population: 25868000,
    demonym: "Angolan",
    borders: ["COG", "COD", "ZMB", "NAM"],
    nativeName: "Angola",
    numericCode: "024",
    currencies:"ADA",
    languages: [
      {
        iso639_1: "pt",
        iso639_2: "por",
        name: "Portuguese",
        nativeName: "Português",
      },
    ],
    flag: "https://restcountries.eu/data/ago.svg",
  },
  {
    name: "Anguilla",
    callingCodes: ["1264"],
    capital: "The Valley",
    altSpellings: ["AI"],
    region: "Americas",
    subregion: "Caribbean",
    population: 13452,
    demonym: "Anguillian",
    timezones: ["UTC-04:00"],
    nativeName: "Anguilla",
    numericCode: "660",
    currencies: "XCD",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
    ],
    flag: "https://restcountries.eu/data/aia.svg",
  },
  {
    name: "Antarctica",
    callingCodes: ["672"],
    region: "Polar",
    population: 1000,
    nativeName: "Antarctica",
    numericCode: "010",
    currencies: "AUD",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "ru",
        iso639_2: "rus",
        name: "Russian",
        nativeName: "Русский",
      },
    ],
    flag: "https://restcountries.eu/data/ata.svg",
  },
  {
    name: "Antigua and Barbuda",
    callingCodes: ["1268"],
    capital: "Saint John's",
    altSpellings: ["AG"],
    region: "Americas",
    subregion: "Caribbean",
    population: 86295,
    demonym: "Antiguan, Barbudan",
    nativeName: "Antigua and Barbuda",
    numericCode: "028",
    currencies: "XCD",
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
    ],
    flag: "https://restcountries.eu/data/atg.svg",
  },
];

//Task 1
let data = country.filter((x) => x.region === "Asia");
console.log(data);


//Task 2 
let data = country.filter((x) => x.population < 200000);
console.log(data);

//Task 3
let countriesdetails = [];
country.forEach(function (data) {
  countriesdetails.push(data.name,data.capital,data.flag);
});
console.log(countriesdetails);

//Task 4
let TotalExperirence = country.reduce((a = 0, population) => {
  debugger;
  if (population.population) {
    return a + population.population;
  }
}, 0);
console.log(TotalExperirence);

//Task 5 
let data = country.filter((x) => x.currencies == "USD");
console.log(data);
