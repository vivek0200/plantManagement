import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from './weather-response.model'; // Assuming you have a model for WeatherResponse.

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/weather/samastipur'; // Replace with your backend API endpoint.

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/${city}`);
  }
}
