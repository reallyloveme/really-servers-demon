/*
 * @Author: 宋君 reallylovejun@gmail.com
 * @Date: 2023-07-31 09:07:18
 * @LastEditors: 宋君 reallylovejun@gmail.com
 * @LastEditTime: 2023-07-31 09:12:22
 * @FilePath: /really-servers/src/modules/open/open.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { OpenService } from './open.service';

@Module({
  providers: [OpenService],
  exports: [OpenService],
})
export class OpenModule {}
