var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookingSchema = new Schema({
  hotel_id: {type: String, required: true},
  room_type_id: String,
  room_id: String,
  room_count: Number,
  price: Number,

  checkin: {type: Date, required: true},
  checkout: {type: Date, required: true},
  adults: {type: Number, requred: true},
  children: {type: Number, requred: true},
  children_ages: Array,

	first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},

	description: String,
	created_by: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});

bookingSchema.pre('save', function(next){
	const currentDate = new Date();
	this.updated_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;

	next();
});

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
