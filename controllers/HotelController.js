const HotelController = {
    index: async function(ctx) {
      const shortDescription = `his Austin hotel is located on the access road to Interstate 35, just 2 blocks from the University of Texas. All rooms are equipped with free WiFi access and cable TV.`;
      const longDescription = shortDescription +
      'Days Inn University/Downtown Austin offers rooms with a microwave, refrigerator, and coffee machine. The rooms also contain an in-room safe and ironing facilities.'
      +' A continental breakfast featuring cereal, pastries, juice, and coffee is served daily at Austin Days Inn. After breakfast, guests can enjoy a refreshing swim in the hotels outdoor pool. Free newspapers are available.'
      + 'Downtown Austin is 1.5 miles from the Days Inn University. The hotel is located across from Seton Hospital.'
      + 'We speak your language!';


        const hotel = {
          id: 1,
          name: 'Shanghai Marriott Hotel City Centre',
          address: 'No.555 Xi Zang Road Middle, Huangpu, Shanghai',
          photos: {},
          shortDescription: shortDescription,
          description: longDescription,
          score: {},
          facilities: {},

        };
        await ctx.render('hotel/index', {
            title: 'Hotel', hotel: hotel
        });
    },


};

module.exports = HotelController;
