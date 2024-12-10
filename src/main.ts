import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { ConfigKeyPaths } from '@src/config';
import { isDev } from '@src/global/env';

/**
 * 初始化 Nest.js 应用并启动监听端口
 */
async function bootstrap() {
  const logger: Logger = new Logger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 开启日志级别打印, logger: false 关闭日志打印
    logger: isDev ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn'],
  });
  const configService = app.get(ConfigService<ConfigKeyPaths>);

  const { port, globalPrefix } = configService.get('app', { infer: true });

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

  // 启动版本管理
  // app.enableVersioning({
  //   defaultVersion: '1', // 不指定默认版本为v1
  //   type: VersioningType.URI,
  // });
  //允许跨域请求
  app.enableCors();
  // 全局前缀
  app.setGlobalPrefix(globalPrefix);
  // 全局守卫
  // app.useGlobalGuards(new LoginGuard());
  // 全局拦截器
  // app.useGlobalInterceptors(new TimeInterceptor());
  await app.listen(port, () => {
    logger.log(`服务已经启动,接口请访问:http://127.0.0.1:${port}`, 'main.ts');
  });
}

bootstrap();
