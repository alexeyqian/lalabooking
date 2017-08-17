var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	hotel_no: {type: String, required: true},
	//lost_date: {type: Date, required: true},
	zipcode: String,
	location: String,

	description: String,

	facilities: Array,

	created_by: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});

hotelSchema.pre('save', function(next){
	const currentDate = new Date();
	this.updated_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;

	next();
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
