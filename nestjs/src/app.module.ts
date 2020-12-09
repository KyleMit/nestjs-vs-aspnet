import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';
import { HomeController } from './home/home.controller';

@Module({
  imports: [],
  controllers: [AppController, WeatherController, HomeController],
  providers: [AppService],
})
export class AppModule {}
