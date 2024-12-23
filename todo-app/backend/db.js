const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chndrsh:abcd1234@cluster0.3zeuf.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}