// Shapes returned by our own /api routes (normalized, not the upstream format).

export type WeatherCodeKey =
  | "clear"
  | "mostlyClear"
  | "partlyCloudy"
  | "overcast"
  | "fog"
  | "drizzle"
  | "freezingDrizzle"
  | "rain"
  | "freezingRain"
  | "snow"
  | "snowGrains"
  | "showers"
  | "snowShowers"
  | "thunderstorm"
  | "thunderstormHail"
  | "unknown";

export type WeatherData = {
  districtId: string;
  observedAt: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windKmh: number;
  condition: WeatherCodeKey;
  high: number;
  low: number;
  rainChance: number | null;
};

export type AirGrade = "good" | "moderate" | "bad" | "veryBad";

export type AirData = {
  districtId: string;
  observedAt: string;
  pm10: number;
  pm25: number;
  pm10Grade: AirGrade;
  pm25Grade: AirGrade;
  overall: AirGrade;
};

export type ExchangeCurrency = "USD" | "EUR" | "JPY" | "CNY";

export type ExchangeData = {
  date: string;
  /** When our server fetched the rates (ISO, from the upstream Date header). */
  fetchedAt: string;
  rates: { currency: ExchangeCurrency; unit: number; krw: number }[];
};

export type ApiError = { error: string };
