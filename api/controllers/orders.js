'use strict';
var q = require('q');
var util = require('util');
var Order = require('../models/Order.js');
var GeoLocation = require("../helpers/geoLocation.js");

module.exports = {
    orders: orders
};

function orders(req, res) {

    // Look it up!
    var query = { $or: [{ originatingAccountId: req.account._id }, { fullfillmentAccountId: req.account._id }] };

    /* GET /orders listing. */
    Order.find(query, function(err, ordersList) {
        if (err) return console.log(err);
        res.json(ordersList);
    });
}