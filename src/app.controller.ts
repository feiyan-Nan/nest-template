import {
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';

@Controller()
// @UseInterceptors(TimeInterceptor) // 控制器级别守卫
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject('Gang')
  private readonly gang: Record<string, any>;

  @Get()
  // 路由级别守卫
  // @UseGuards(new LoginGuard())
  // @UseGuards(LoginGuard)
  // @UseInterceptors(TimeInterceptor)
  @UsePipes(ValidatePipe)
  getHello(@Req() request: Request) {
    console.log('api12345');
    return this.gang;
  }
  @Post()
  postHello(): string {
    return this.appService.getHello();
  }
}
