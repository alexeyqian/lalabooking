var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var roomTypeSchema = new Schema({
	room_type_no: {type: String, required: true};

	description: String,
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
