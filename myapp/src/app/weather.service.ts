import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecastCity(city: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&appid=08bb995fdf45a72f61123f2c036114f6&q='+city);
  }

  getDetailForecast(city: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=08bb995fdf45a72f61123f2c036114f6&q='+city);
  }
}
