const Booking = require('../models/Booking');

const BookController = {
    inputCustomerInfo: async function(ctx) {

        await ctx.render('book/inputCustomerInfo', {
            title: 'Input Customer Info', csrf: ctx.csrf, errors: ctx.errors
        });
    },

    saveCustomerInfo: async function(ctx){

      ctx.checkBody('firstName').notEmpty('Frist name is required.');
      ctx.checkBody('lastName').notEmpty('Last name is required.');
      ctx.checkBody('email').notEmpty('Email is required.');
      if(ctx.request.body.email)
  		  ctx.checkBody('email').isEmail('Invalide email.');

  		if(ctx.errors)
        //console.log(ctx.errors);
  			await ctx.render('book/inputCustomerInfo', { title: 'Register', csrf: ctx.csrf, errors: JSON.stringify(ctx.errors)});
  		else{
        console.log('step3');
  			const booking = new Booking();
        booking.checkin = new Date();
        booking.checkout = new Date();
        booking.adults = 2;
        booking.children = 2;
        booking.children_ages = [1,2];

        booking.hotel_id = 'SH001';
        booking.room_type_id = 'RT001';
        booking.room_id = 'R001';
        booking.room_count = 1;
        booking.price = 525.99;

  			booking.first_name = ctx.request.body.firstName;
        booking.last_name = ctx.request.body.lastName;
        booking.email = ctx.request.body.email;

        booking.description = 'TEST BOOKING';

        booking.created_by = booking.email;

        try {
            const saved = await booking.save();
            if (saved) {
              ctx.redirect('/book/step2');
            } else {
              console.error(err);
              throw error;
            }
        } catch (err) {
            throw err;
        }

  			// booking.save(function (err) {
  			//   if (err) {
        //     console.log('setp 5');
  			//     //console.log(err);
  			//     throw error;
  			//   } else {
        //     console.log('step 6');
  			//     ctx.redirect('/book/step2');
        //     console.log('step7');
  			//   }
  			// });
  		}
    },

    inputPaymentInfo: async function(ctx) {

        await ctx.render('book/inputPaymentInfo', {
            title: 'Input Payment Info'
        });
    },

    confirmBooking: async function(ctx) {

        await ctx.render('book/confirmBooking', {
            title: 'Confirm Booking'
        });
    },


};

module.exports = BookController;
