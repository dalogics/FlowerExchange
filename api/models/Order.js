var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    id: String,
    originatingAccountId: mongoose.Schema.ObjectId,
    fullfillmentAccountId: mongoose.Schema.ObjectId,
    toFirstName: String,
    toLastName: String,
    toAddress1: String,
    toAddress2: String,
    toCity: String,
    toState: String,
    toZipCode: Number,
    toHomePhone: String,
    toMobilePhone: String,
    toEmail: String,
    fromFirstName: String,
    fromLastName: String,
    fromAddress1: String,
    fromAddress2: String,
    fromCity: String,
    fromState: String,
    fromZipCode: Number,
    fromHomePhone: String,
    fromMobilePhone: String,
    fromEmail: String,
    orderStatus: Number,
    toGeoCode: Object,
    toLoc: Object,
    fromGeoCode: Object,
    fromLoc: Object,
    orderDetails: [{
        itemNumber: String,
        itemName: String,
        itemDescription: String,
        itemCost: Number,
        itemSimilarSubstitutionOk: Boolean,
        itemMaxCost: Number
    }],
    orderTotal: Number,
    orderTotalNotToExceed: Number,
    deliveryDate: { type: Date, default: Date.now },
    timedDelivery: Boolean,
    deliveryTime: { type: Date, default: Date.now },
    expirationDate: { type: Date, default: Date.now },
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);