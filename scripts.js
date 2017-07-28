var request = require('superagent')
var p = require('./package.json')
var P = require('../../package.json')
var path = require('path')
console.log('项目名：' + P.name + '>>>>>>>>组件名:' + p.name)
console.log(__dirname)
request
  .get('http://future.test.sankuai.com/monitor/logstore/log/')
  .query({ attribute: '0', componentName: p.name, componentVersion: p.version, appName: P.name, type: 'component' })
  .end(function (err, res) {

  });