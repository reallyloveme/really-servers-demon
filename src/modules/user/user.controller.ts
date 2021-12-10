/*
 * @Author: your name
 * @Date: 2021-11-06 17:11:15
 * @LastEditTime: 2021-11-08 20:07:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/modules/user/user.controller.ts
 */
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('find-one')
  // findOne(@Body() body: any) {
  //   return this.userService.findOne(body.username);
  // }
  @Post('register')
  async register(@Body() body: any) {
    return await this.userService.register(body);
  }
}
