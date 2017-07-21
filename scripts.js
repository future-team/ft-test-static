var request = require('superagent')
var p = require('./package.json')
var P = require('../../package.json')
var path = require('path')
function test(){
    console.log('黄一个')
    // var name = p.name
    console.log('项目名：'+P.name+'>>>>>>>>组件名:'+p.name)
    console.log(__dirname)
}
request
  .get('')
  .query({ query: 'Manny', range: '1..5', order: 'desc' })
  .end(function(err, res){

  });
test()