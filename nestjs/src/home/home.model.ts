import { Injectable } from '@nestjs/common';

@Injectable()
export class Home {
  message: string;

  constructor(msg: string) {
    this.message = msg;
  }
}
