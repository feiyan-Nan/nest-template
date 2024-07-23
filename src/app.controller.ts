import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request) {
    console.log(request);
    return 'ip';
  }
  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
