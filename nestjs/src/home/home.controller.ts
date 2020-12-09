import { Controller, Get, Render } from '@nestjs/common';
import { Home } from './home.model';

@Controller('home')
export class HomeController {
  @Get()
  @Render('index')
  root() {
    const model = new Home('Hello');
    return model;
  }
}
