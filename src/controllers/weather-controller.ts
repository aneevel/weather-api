import { Request, Response, NextFunction } from 'express';
import { ForecastService } from '../services/forecast.service';

export const getWeather = async (req: Request, res: Response, next: Function) => {

  const params = {
    "latitude": 43.0731,
    "longitude": -89.4012,
    "current": 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
    "hourly": 'temperature_2m,precipitation',
    'daily': 'weather_code,temperature_2m_max,temperature_2m_min'
  };

  const url = "https://api.open-Meteo.com/v1/forecast";
  const responses = await ForecastService.getForecast(url, params);

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];

  const utcOffsetSeconds = response?.utcOffsetSeconds();

  const current = response?.current()!;
  const hourly = response?.hourly()!;
  const daily = response?.daily()!;

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds!) * 1000),
      temperature: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
      windDirection: current.variables(3)!.value()
    },
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds!) * 1000)
      ),
      temperature: hourly.variables(0)!.valuesArray()!,
      precipitation: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds!) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperatureMax: daily.variables(1)!.valuesArray()!,
      temperatureMin: daily.variables(2)!.valuesArray()!,
    }
  };

  res.json({
    "time": weatherData.current.time.toISOString(),
    "weatherCode": weatherData.current.weatherCode,
    "temperature": weatherData.current.temperature,
    "windDirection": weatherData.current.windDirection
  });
}
