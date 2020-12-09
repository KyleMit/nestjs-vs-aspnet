import { Controller, Get, Param } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Get()
  getWeather(): string {
    return 'Frightful';
  }

  @Get('light')
  getDaylight(@Param('hour') id: string): string {
    return 'Frightful';
  }
}
