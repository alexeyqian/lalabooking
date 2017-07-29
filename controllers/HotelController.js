const HotelController = {
    index: async function(ctx) {
        const hotel = {
          id: 1,
          name: 'Shanghai Marriott Hotel City Centre',
          address: 'No.555 Xi Zang Road Middle, Huangpu, Shanghai',
          photos: {},
          description: '',
          score: {},
          facilities: {},

        };
        await ctx.render('hotel/index', {
            title: 'Hotel', hotel: hotel
        });
    },


};

module.exports = HotelController;
