namespace Response {
  /** 
   * Represents the directions wind may blow
  */
  enum WindDirection {
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
   * Represents the weather data for a city for the current day
  */
  export type CityResponse = {
    currentTemperature: number; // Celsius
    highTemperature: number;    // Celsius
    lowTemperature: number;     // Celsius
    humidity: number;           // Percentage (0 - 100)
    chanceForRain: number;      // Percentage (0 - 100)
    windSpeed: number;          // mp/h
    windDirection: WindDirection
  }
}
