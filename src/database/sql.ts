/*
 * @Author: your name
 * @Date: 2021-11-07 15:45:22
 * @LastEditTime: 2021-11-08 19:59:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/database/sql.ts
 */
class SQL {
  // 根据username查询用户
  SELECT_USER_NAME(username: string) {
    return `SELECT
      id, real_name realName, role
      FROM
      admin_user
      WHERE
      account_name = '${username}'`;
  }
  // 注册
  REGISTER_SQL(
    accountName: string,
    realName: string,
    hashPwd: string,
    salt: string,
    mobile: string,
  ) {
    return `
    INSERT INTO admin_user
    (user_id, account_name, real_name, passwd, passwd_salt, mobile, user_status, role, create_by)
  VALUES
    (REPLACE(UUID()), '${accountName}', '${realName}', '${hashPwd}', '${salt}', '${mobile}', 1, 3, 0)
    `;
  }
}

const SQL_SELECT = new SQL();

export default SQL_SELECT;
