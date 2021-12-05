const {Schema, model} = require('mongoose');

const Products = new Schema({
	name: {type: String},
	price: {type: Number, default: 0 },
	body: {type: String},
	rem: {type: Number, default:0},
	avatar: {type: String, required: true}

})

module.exports = model('Products', Products)