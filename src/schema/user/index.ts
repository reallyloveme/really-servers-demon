import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: '账号名称',
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  accountName: string;

  @ApiProperty({
    description: '真实姓名',
  })
  @IsNotEmpty({ message: '真实姓名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  realName: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;

  @ApiProperty({
    description: '确认密码',
  })
  @IsNotEmpty({ message: '重复密码不能为空' })
  repassword: string;

  @ApiProperty({
    description: '手机号',
  })
  @IsNotEmpty({ message: '手机号不能为空' })
  mobile: string;
}

export class LoginDto {
  @ApiProperty({
    description: '手机号',
  })
  phone: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;
}