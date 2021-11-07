/*
 * @Author: your name
 * @Date: 2021-11-07 15:45:22
 * @LastEditTime: 2021-11-07 17:18:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/database/sql.ts
 */
class SQL {
  // 根据username查询用户
  SELECT_USER_NAME(username: string) {
    return `SELECT
      user_id id, real_name realName, role
      FROM
      admin_user
      WHERE
      account_name = '${username}'`;
  }
}

const SQL_SELECT = new SQL();

export default SQL_SELECT;
