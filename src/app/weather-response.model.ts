export interface Main {
    temp: number;
    humidity: number;
  }
  
  export interface Weather {
    description: string;
  }
  
  export interface WeatherResponse {
    main: Main;
    weather: Weather[];
  }
  