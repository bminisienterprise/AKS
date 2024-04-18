import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/isHuman')
  checkForHuman(): string {
    return `API called by Human: ${process.env.ISHUMAN}`;
  }
}
