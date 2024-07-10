/*
 * @Author: your name
 * @Date: 2021-11-06 17:00:13
 * @LastEditTime: 2023-07-31 09:11:28
 * @LastEditors: 宋君 reallylovejun@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
// import { UserService } from './modules/user/user.service';
import { UserModule } from './modules/user/user.module';
// import { AuthService } from './modules/auth/auth.service';
import { AuthModule } from './modules/auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { OpenController } from './modules/open/open.controller';
import { OpenModule } from './modules/open/open.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ScheduleModule.forRoot(),
    HttpModule,
    OpenModule,
  ],
  controllers: [AppController, UserController, OpenController],
  providers: [AppService],
})
export class AppModule {}
