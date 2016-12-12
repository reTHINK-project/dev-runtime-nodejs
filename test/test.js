// const https = require('https');
//
// var options = {
//   hostname: 'https://test.com',
//   path: '/',
//   method: 'POST'
// };


var request = require('request');
var req = request.post('https://test.com', function (error, response, body) {
      console.log('statusCode:', response.statusCode);
  if (!error && response.statusCode == 200) {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);
    // console.log(body) // Show the HTML for the Google homepage.
  }
  response.on('data', (d) => {
    process.stdout.write(d);
  });
})

// var req = http.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

req.on('error', (e) => {
  console.error(e);
});
req.end();
