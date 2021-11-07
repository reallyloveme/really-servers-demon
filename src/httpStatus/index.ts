/*
 * @Author: your name
 * @Date: 2021-11-07 17:00:53
 * @LastEditTime: 2021-11-07 17:28:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /really-servers/src/httpStatus/index.ts
 */
import { HTTP_CODE } from '../../config/httpCode';
class HttpStatus {
  success(code: number, data: any, msg: string) {
    return {
      code,
      data,
      msg: `${msg || HTTP_CODE[code]}`,
    };
  }
  error(code: number, msg: string) {
    return {
      code,
      msg: `${msg || HTTP_CODE[code]}`,
    };
  }
}

const HTTP_STATUS = new HttpStatus();

export default HTTP_STATUS;
