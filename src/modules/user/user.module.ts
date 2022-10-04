/*
 * @Author: your name
 * @Date: 2021-11-06 17:12:44
 * @LastEditTime: 2021-11-06 18:03:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/modules/user/user.module.ts
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
@Module({
  // controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
