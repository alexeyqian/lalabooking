const SearchByMapController = {
    index: async function(ctx) {
        await ctx.render('searchbymap/index', {
            title: 'Search by Map'
        });
    },


};

module.exports = SearchByMapController;
