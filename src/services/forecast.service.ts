import { fetchWeatherApi } from "openmeteo";

const getForecast = async (url: string, params: Object) => {
  const responses = await fetchWeatherApi(url, params);
  return responses;
}

module.exports = { getForecast };
