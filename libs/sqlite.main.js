var sqlite = require('./sqlite');
module.exports.db = new sqlite.init();
module.exports.Proto = require('./sqlite.proto');
module.exports.Service = require('./sqlite.service');
module.exports.Device = require('./sqlite.deviceTest');
module.exports.HmVersion = require('./sqlite.hm_version');
module.exports.HiveManager = require('./sqlite.hivemanagerTest');