const %NAME = require('../models/%NAME.model'); 

module.exports.YOUR_CONTROLLER_NAME = async (req, res) => {
    try {
        res.send("hello!");
    } catch (err) {
        console.log(err);
    }
}