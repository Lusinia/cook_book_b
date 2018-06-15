// keys.js - figure out what set of credetials to return
const env = require('../utils/constants').ENV;

module.exports = process.env['NODE_ENV'] === env.PRODUCTION ? require('./prod') :  require('./dev');
