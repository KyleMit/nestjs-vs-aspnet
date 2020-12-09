import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';

@Module({
  imports: [],
  controllers: [AppController, WeatherController],
  providers: [AppService],
})
export class AppModule {}
