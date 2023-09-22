import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../weather-response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = 'YourCityName'; // Replace with the desired city name.
  weatherData: WeatherResponse | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    });
  }
}

