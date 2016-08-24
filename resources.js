let express = require('express');
var path = require('path');
let log4js = require('log4js');
let domain = 'hybroker.rethink.ptinovacao.pt';
let logger = log4js.getLogger('server');
let app = express();
const hypertyURI = (domain, hyperty) => `http://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

log4js.configure({
  appenders: [{ type: 'console' }],
  levels: {
      server:  'DEBUG'
    }
});

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.set('trust proxy', 1);
app.use(express.static(path.resolve(__dirname, '../static/')));
app.listen(80);
