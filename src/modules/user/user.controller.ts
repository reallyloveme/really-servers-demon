/*
 * @Author: your name
 * @Date: 2021-11-06 17:11:15
 * @LastEditTime: 2023-07-31 09:21:58
 * @LastEditors: 宋君 reallylovejun@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/modules/user/user.controller.ts
 */
import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto, LoginDto } from '../../schema/user';
import { ApiTags, ApiResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport'; // jwt守卫
import { ValidationPipe } from '../../pipe/validation.pipe';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  // @Post('find-one')
  // findOne(@Body() body: any) {
  //   return this.userService.findOne(body.username);
  // }
  @Post('register')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async register(@Body() body: RegisterDto) {
    return await this.userService.register(body);
  }

  // @Post('login')
  // @HttpCode(200)
  // async login(@Body() body: LoginDto) {
  //   return await this.userService.login(body);
  // }
  // JWT验证 - Step 1: 用户请求登录
  // @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证
  @Post('login')
  async login(@Body() loginParmas: any) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }
}
