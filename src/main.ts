import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Response, Request } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';

/**
 * 初始化 Nest.js 应用并启动监听端口
 */
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', { prefix: '/public' });

  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before', req.url);
    next();
    console.log('after');
  });

  app.use(
    session({
      secret: 'gang',
      cookie: { maxAge: 60 * 1000 },
    }),
  );

  // 全局前缀
  app.setGlobalPrefix('api');
  // 全局守卫
  // app.useGlobalGuards(new LoginGuard());
  // 全局拦截器
  // app.useGlobalInterceptors(new TimeInterceptor());
  await app.listen(3000);
}

bootstrap();
