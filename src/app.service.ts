/*
 * @Author: 宋君 reallylovejun@gmail.com
 * @Date: 2022-10-02 16:02:43
 * @LastEditors: 宋君 reallylovejun@gmail.com
 * @LastEditTime: 2023-07-31 08:38:39
 * @FilePath: /really-servers/src/app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { map, lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  @Cron('30 * 8-9 * * *')
  async handleCron() {
    const requstData = this.httpService.post(
      'https://open.feishu.cn/open-apis/bot/v2/hook/cbd98e68-8a23-459f-8ef9-bf686dd6a393',
      {
        msg_type: 'post',
        content: {
          post: {
            zh_cn: {
              title: '',
              content: [
                [
                  {
                    tag: 'text',
                    text: '该起床打卡上班了',
                  },
                  {
                    tag: 'at',
                    // user_id: 'ou_6581de0000c0fad1f36ce35404361d92',
                    user_id: 'all',
                  },
                ],
              ],
            },
          },
        },
      },
    );
    const checkResult = await (await lastValueFrom(requstData)).data;
    console.log(checkResult);
  }
}
