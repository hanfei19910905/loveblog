var Settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(Settings.db, new Server(settings.host, Connection.DEFAULT_PORT，{safe: true}));
