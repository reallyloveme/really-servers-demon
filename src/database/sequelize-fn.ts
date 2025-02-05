/*
 * @Author: your name
 * @Date: 2021-11-06 17:37:09
 * @LastEditTime: 2021-11-08 20:20:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/database/sequelize.ts
 */
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from './sequelize'; // 引入 Sequelize 实例
class SEQUELIZE_FN {
  async query(sql: any, raw: boolean, logging: boolean) {
    const res = await sequelize.query(sql, {
      type: Sequelize.QueryTypes.SELECT, // 查询方式
      raw: raw, // 是否使用数组组装的方式展示结果
      logging: logging, // 是否将 SQL 语句打印到控制台，默认为 true
    });
    return res;
  }
  async queryRes(sql: any) {
    await sequelize.query(sql, {
      logging: false, // 是否将 SQL 语句打印到控制台，默认为 true
    });
  }
}

const SEQUELIZE_FORMATE = new SEQUELIZE_FN();
export default SEQUELIZE_FORMATE;
