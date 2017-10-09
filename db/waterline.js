var Waterline = require('waterline');

// Instantiate a new instance of the ORM
var orm = new Waterline();

/////////////////////////////////////////////////////
// WATERLINE CONFIG
/////////////////////////////////////////////////////

// Require any waterline compatible adapters here
var diskAdapter = require('sails-disk'),
    mysqlAdapter = require('sails-mysql');

// Build A Config Object
var wlconfig = {
    // Setup Adapters
    // Creates named adapters that have been required
    adapters: {
        'default': diskAdapter,
        disk: diskAdapter,
        mysql: mysqlAdapter
    },

    // Build Connections Config
    // Setup connections using the named adapter configs
    connections: {
        myLocalDisk: {
            adapter: 'disk'
        },
        myLocalMySql: {
            adapter: 'mysql',
            host: 'localhost',
            port: 3306,
            user: 'free',
            password: '2222',
            database: 'we'
        }
    }
};

///////////////////////////////////////////////////
// WATERLINE MODELS
///////////////////////////////////////////////////

var country = require('../models/country');

// Load the Models into the ORM
orm.loadCollection(country);


exports.orm = orm;
exports.config = wlconfig;