var request = require('request'),
    console = require('console');
// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
module['exports'] = function helloWorld (hook) {
  // hook.req is a Node.js http.IncomingMessage
  var host = hook.req.host;
  
  request('http://gs.statcounter.com/chart.php?bar=1&' +
          'device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&' +
          'device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&' +
          'multi-device=true&' +
          'statType_hidden=browser&' +
          'region_hidden=ww&' +
          'granularity=monthly&' +
          'statType=Browser&region=Worldwide&fromInt=201709&toInt=201709&' +
          'fromMonthYear=2017-09&toMonthYear=2017-09&csv=1', function(error, response, body) {
      if (error) { console.dir('Error: ', error) }
  	  hook.res.end(body.replace(/,/g, ' '));
  });
};
