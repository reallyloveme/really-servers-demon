/*
 * @Author: your name
 * @Date: 2021-11-06 17:11:59
 * @LastEditTime: 2021-11-07 17:29:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/modules/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import SEQUELIZE_FORMATE from '../../database/sequelize-fn'; // 引入 Sequelize 实例
import SQL_SELECT from '../../database/sql';
import HTTP_STATUS from '../../httpStatus/';

@Injectable()
export class UserService {
  async findOne(username: string): Promise<any | undefined> {
    const sql = SQL_SELECT.SELECT_USER_NAME(username); // SQL 查询语句
    try {
      const res = await SEQUELIZE_FORMATE.query(sql);
      const user = res[0]; // 查出来的结果是一个数组，我们只取第一个。
      if (user) {
        const reqData = {
          user,
        };
        const success_data = HTTP_STATUS.success(200, reqData, 'Success');
        return success_data;
      } else {
        const error_data = HTTP_STATUS.error(200, '查无此人');
        return error_data;
      }
    } catch (error) {
      const error_data = HTTP_STATUS.error(500, '');
      return error_data;
    }
  }
}
