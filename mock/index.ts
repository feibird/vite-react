import { MockMethod } from 'vite-plugin-mock'
import pkg from 'mockjs';
const { mock } = pkg;

const arr = [];
for (let index = 0; index < 20; index++) {
    arr.push({
        name:mock('@cname'),
        age:mock('@integer(18, 50)'),
        address:mock('@county(true)'),
        sex:mock('@integer(0, 1)'),
        grade:('@integer(1, 5)'),
        desc:('@csentence(10, 100)'),
        type:mock('@boolean'),
        id:mock('@id')
    });
}

const logList = {
    total: 31,
    page: 1,
    page_size: 20,
    list: arr,
};
// 导出所有的 Mock 数据
export default [
    {
        url: '/mock/api/post', // 接口地址
        method: 'post', // 请求方式
        response: () => { // 模拟数据
            console.log('mock')
            return {
                status_code: 0,
                status_msg: 'success',
                data: logList,
            };
        },
    },
    {
        url: '/mock/api/get', // 接口地址
        method: 'get', // 请求方式
        response: () => { // 模拟数据
            console.log('mock')
            return {
                status_code: 0,
                status_msg: 'success',
                data: logList,
            };
        },
    },
] as MockMethod[];