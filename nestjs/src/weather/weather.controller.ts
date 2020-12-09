import { Controller, Get, Query } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Get()
  getWeather(): string {
    return 'Frightful';
  }

  @Get('light')
  getDaylight(@Query('hour') hour: number): string {
    console.log(hour);
    return hour < 6 || hour > 18 ? 'Dark' : 'Light';
  }
}
