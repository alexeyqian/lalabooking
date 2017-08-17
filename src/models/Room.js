var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var roomSchema = new Schema({
	fid: {type: String, required: true},
	room_type_id: Schema.Types.ObjectId,
	room_type_fid: {type: String, required: true},
  hotel_id: Schema.Types.ObjectId,
  hotel_fid: String,
  name: String,

  price_currency: String,
  price: Number,

  sqft: Number,

  bed_type: String,
  bed_count: Number,
  can_add_bed: Boolean,

  include_breakfast: Boolean,
  free_wifi: Boolean,
  free_cancellation: Boolean,
	cancellation_rule: String,
	no_payment_needed: Boolean,
	pay_at: String,

  fits: Number,
  floor: String,
  photo_default: String,
  photos:[Schema.Types.Mixed],
  facilities: [String],

  display_order: Number,
	description: String,
	other_info: Schema.Types.Mixed,

	created_by: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});

roomSchema.pre('save', function(next){
	const currentDate = new Date();
	this.updated_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;

	next();
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;
