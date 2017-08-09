const BookController = {
    inputCustomerInfo: async function(ctx) {

        await ctx.render('book/inputCustomerInfo', {
            title: 'Input Customer Info'
        });
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
