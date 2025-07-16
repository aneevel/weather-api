export namespace ResponseTypes {
  /** 
   * Represents the directions wind may blow
  */
  export enum WindDirection {
    North = "North",
    Northeast = "Northeast",
    East = "East",
    Southeast = "Southeast",
    South = "South",
    Southwest = "Southwest",
    West = "West",
    Northwest = "Northwest"
  }

  /**
   * Represents the weather data for a city at the current time
  */
  export type CityResponse = {
    time: Date;
    humidity: number;           // Percentage (0 - 100)
    temperature: number;        // Celsius
    rain: number;            // Sum of rainfall in inches
    snowfall: number;        // Sum of snowfall in inches
    windSpeed: number;          // mph
    windDirection: WindDirection
  }
}
