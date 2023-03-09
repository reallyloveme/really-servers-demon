/*
 * @Author: your name
 * @Date: 2021-11-06 17:33:39
 * @LastEditTime: 2021-11-06 17:38:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/config/db.ts
 */
const productConfig = {
  mysql: {
    port: 3306,
    host: '124.222.123.234',
    user: 'root',
    password: 'admin',
    database: 'myweb', // 库名
    connectionLimit: 10, // 连接限制
  },
};

const localConfig = {
  mysql: {
    port: 3306,
    host: '124.222.123.234',
    user: 'myweb',
    password: 'admin',
    database: 'myweb', // 库名
    connectionLimit: 10, // 连接限制
  },
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;
