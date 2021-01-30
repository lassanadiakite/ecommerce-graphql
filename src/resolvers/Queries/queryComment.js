const { forwardTo } = require('prisma-binding')

async function comment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function comments (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
/*async function comments (parent, args, context) {
    return context.prisma.link.findMany()
}*/

module.exports = {
    comment,
    comments
  }