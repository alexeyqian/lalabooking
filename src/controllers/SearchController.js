const SearchController = {
    index: async function(ctx) {
        await ctx.render('search/index', {
            title: 'Search'
        });
    },


};

module.exports = SearchController;
