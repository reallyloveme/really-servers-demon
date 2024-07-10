/*
 * @Author: 宋君 reallylovejun@gmail.com
 * @Date: 2022-10-03 09:28:19
 * @LastEditors: 宋君 reallylovejun@gmail.com
 * @LastEditTime: 2023-07-31 08:43:24
 * @FilePath: /really-servers/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE；
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { logger } from './middleware/logger.middleware';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AllExceptionsFilter } from './filter/any-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Api example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Api/V1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  // 监听所有的请求路由，并打印日志
  app.use(logger);
  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());
  // 处理其他异常
  app.useGlobalFilters(new AllExceptionsFilter());
  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(9988, '0.0.0.0', () => {
    console.log('nest 启动成功, port: 9988');
  });
}
bootstrap();
