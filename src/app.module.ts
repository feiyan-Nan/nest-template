import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AaaModule } from './aaa/aaa.module';
import { LogMiddleware } from './log.middleware';
import { LoginGuard } from './login.guard';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TimeInterceptor } from './time.interceptor';

@Module({
  imports: [PersonModule, AaaModule],
  controllers: [AppController],
  providers: [
    AppService,
    // { provide: APP_GUARD, useClass: LoginGuard }
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeInterceptor,
    },
    {
      provide: 'Gang',
      useFactory: () => {
        return {
          name: 'gang',
          age: 18,
          sex: '男',
        };
      },
    },
  ], // 全局可用
})
export class AppModule implements NestModule {
  // 路由中间件 forRoutes 指定路由，apply 指定中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*person');
  }
}
