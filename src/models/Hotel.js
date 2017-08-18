var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	fid: {type: String, required: true},
  name: {type: String, required: true},

  price_min: Number,
  price_max: Number,
  price_currency: String,

  addr_street1: String,
  addr_street2: String,
  addr_district: String,
  addr_city: {type: String, required: true},
  addr_state: {type: String, required: true},
  addr_zipcode: {type: String, required: true},
  addr_country: {type: String, required: true},
  addr_formated: String,
  latitude: Number,
  longitude: Number,

  photo_default: String,
  photos: [Schema.Types.Mixed],

  description: String,
	telephone: String,

  stars: Number,
  chain: String,
  category: String,
  themes: [String],

  facilities: Array,
  room_facilities:Array,

  policies: {
    checkin: String,
    checkout: String,
    free_cancellation: Boolean,
		cancellation_rule: String,
		no_payment_needed: Boolean,
		pay_at: String,
    children_and_extra_bed: String,
    pets_allowed: Boolean,
    accepted_credit_cards: Array,
  },

  other_info: String,

  distances: Array,

  revew_count: Number,
  review_score: Number,
  location_score: Number,
  favorited_count: Number,
  recommended_count: Number,

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
