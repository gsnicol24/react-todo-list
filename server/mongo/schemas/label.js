var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var LabelSchema = new Schema({
    name: String,
    color: String
})

const Label = mongoose.model("Label", LabelSchema);

module.exports = Label;