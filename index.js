var Logger = require('pmlogger')

module.exports = {
    test:function(){
        let a = Logger.ModuleLogger
        new a('测试')
    }
}
