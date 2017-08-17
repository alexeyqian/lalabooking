var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var roomTypeSchema = new Schema({
	fid: {type: String, required: true},
  hotel_id: Schema.Types.ObjectId,
  hotel_fid: String,
  name: String,

  price_currency: String,
  price_min: Number,
  price_max: Number,

  sqft_min: Number,
  sqft_max: Number,

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
  floors: [String],
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

roomTypeSchema.pre('save', function(next){
	const currentDate = new Date();
	this.updated_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;

	next();
});

var RoomType = mongoose.model('RoomType', roomTypeSchema);

module.exports = RoomType;
