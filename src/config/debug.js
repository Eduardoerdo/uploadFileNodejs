const debug = require('debug');

module.exports = {
    errorLog: debug('app:error'),
    appLog: debug('app')
}