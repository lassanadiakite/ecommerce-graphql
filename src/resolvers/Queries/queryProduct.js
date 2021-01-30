const { forwardTo } = require('prisma-binding')

async function product (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function products (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
/*async function products (parent, args, context) {
    return context.prisma.link.findMany()
}*/

module.exports = {
    product,
    products
  }

 