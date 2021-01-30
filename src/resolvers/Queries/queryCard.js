const { forwardTo } = require('prisma-binding')

async function card (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function cards (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
/*async function cards (parent, args, context) {
    return context.prisma.link.findMany()
} */

module.exports = {
    card,
    cards
  }