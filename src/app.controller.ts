import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // 路由级别守卫
  // @UseGuards(new LoginGuard())
  // @UseGuards(LoginGuard)
  getHello(@Req() request: Request) {
    return '这里是ip';
  }
  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
