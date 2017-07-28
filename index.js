var Logger = require('pmlogger')
var test = function () {
    var loggerOpt = {
        //组件id统一为1
        id: 1,
        //上报地址
        url: 'http://future.test.sankuai.com/monitor/logstore/log/',
        // 浏览器端上传
        attribute: 1
    }
    window.pmlogger = window.pmlogger || new Logger(loggerOpt)
    pmlogger.info({
        attribute: 1,
        type: 8,
        pageUrl: location.origin+location.pathname
    })
}
module.exports = {
    test:test
}
