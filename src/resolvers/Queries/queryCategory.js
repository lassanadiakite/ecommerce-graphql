const { forwardTo } = require('prisma-binding')

async function category (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function categories (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
/*async function categories (parent, args, context) {
    return context.prisma.link.findMany()
}*/

/*async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
    })
  
    return links
  } */
 /* 
   Query: {
     books: async (parent,args , ctx, info) => {
          orderBy
          skip
          first
          const { orderBy, skip, where, first}=args;
          const OptionSearch={}
          const FilterSearch={
               where:{
                    AND:[]
               }
          }
          if(orderBy){
               OptionSearch.orderBy=orderBy;
          }
          if(first){
                              OptionSearch.first = orderBy;

          }
          if (skip) {
            OptionSearch.skip = skip;
          }


          const {
               authors,
               couress,
                publisherYears,
            publisher,
               classRooms,
               catagories,
          } = filter;
          return await ctx.prisma.query.books(
            {
              ...OptionSearch,
              ...FilterSearch,
            },
            info
          );
     },
     book: async (parent, args, ctx, info) => {
          return await ctx.prisma.query.book({
               where: {
                    id: args.id
               }
          }, info)


     },

}
 */

module.exports = {
    category,
    categories
  }