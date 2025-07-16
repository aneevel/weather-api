import { fetchWeatherApi } from "openmeteo";

export class ForecastService {

  static async getForecast(url: string, params: Object) {
    const responses = await fetchWeatherApi(url, params);
    return responses;
  }
}
