var mongoose = require('mongoose');
var label = require('./label');

var Schema = mongoose.Schema;
var TodoSchema = new Schema({
    title: String,
    completed: Boolean,
    labels: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Label'
        }
    ]
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;