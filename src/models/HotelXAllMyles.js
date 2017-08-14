var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hotelXAllMylesSchema = new Schema({
	hotel_id: {type: String, required: true},
  hotel_name: {type: String, required: true},
  chain_name: String,
  thumbnail: String,
  description: String,
  stars: Number,

  latitude: Number,
  longitude: Number,
  distance: Number,

  max_rate:{
    amount: Number,
    currency: String
  },
  min_rate:{
    amount: Number,
    currency: String
  },

	amenities: {
    air_conditioning: Boolean,
    bar: Boolean,
    business_center: Boolean,
    gym: Boolean,
    internet: Boolean,
    laundry: Boolean,
    meeting_rooms: Boolean,
    parking: Boolean,
    restaurant: Boolean,
    room_service: Boolean,
    safe_deposit_box: Boolean,
    spa: Boolean,
    swimming: Boolean
  },

	created_by: {type: String, required: true},
	created_at: Date,
	updated_at: Date
});

hotelXAllMylesSchema.pre('save', function(next){
	const currentDate = new Date();
	this.updated_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;

	next();
});

var HotelXAllMyles = mongoose.model('HotelXAllMyles', hotelXAllMylesSchema);

module.exports = HotelXAllMyles;
