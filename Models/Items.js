const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = Item = mongoose.model('item', ItemSchema); 