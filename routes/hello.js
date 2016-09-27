'use strict'

var Request = require('../lib/request');
var Response = require('../lib/response');

var handler = function(api) {
  return function(request, response) {
    let req = Request(request);
    let res = Response(response, api);

    let name = req.queryString.name || "mondo";

    return res.send('hello <strong>' + name + '</strong>', 'text/html', 200)
  }
}

module.exports = {
  method: 'get',
  path: "/hello",
  handler: handler
}
