var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var roomSchema = new Schema({
	room_no: {type: String, required: true},


	description: String,
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
