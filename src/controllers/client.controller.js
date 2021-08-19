const { isValidObjectId } = require("mongoose");
const db = require("../models");
const Client = db.clients;

exports.blacklist = (req, res) => {
 
    Client.find({}, {}, function(err, result) {

        try { 
            if (result.length > 0) {
                res.send(result);
            }
        }
        catch(ex){
            return next(err);
        }
    });
};
