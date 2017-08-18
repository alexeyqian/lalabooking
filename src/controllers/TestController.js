const Hotel = require('../models/Hotel');
const fs = require('fs');
const TestController = {
    index: async function(ctx) {

        await ctx.render('test/index', {
            title: 'Test'
        });
    },

    test1: async function(ctx){
      console.log(process.cwd());
      const filePath = process.cwd() + '/src/db/lala/hotelDetail.json';
      const json = require(filePath);
      //const json = await fs.readFile('/public/hotelDetail.json');

      const hotel = new Hotel(json);
      hotel.created_by = 'admin';

      try {
          await hotel.save();
          ctx.body = 'ok';
      } catch (err) {
          throw err;
      }
    }

};

module.exports = TestController;
