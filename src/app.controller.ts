import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request) {
    return '这里是ip';
  }
  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
