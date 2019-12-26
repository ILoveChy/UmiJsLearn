import Mock from 'mockjs'
//导出的是数据模拟的配置
//该文件会被umiJs读取
let result = Mock.mock({
    msg: "查询成功",
    status: "success",
    "data|12": [{
        name: "@cname",
        address: "@city",
        appkey: /demo\d{2}_\d{10}/,
        "birth|1950-2019": 0,
        "ctime|1554049417-1564545457": 0,
        "utime|1554049417-1564545457": 0,
        email: "@email",
        "id|+1": 10001,
        phone: /1\d{10}/,
        sNo: /\d{5}/,
        "sex|1": [0, 1]
    }]
})
export default {
    "GET /api/student/findAll": result
}