const { forwardTo } = require('prisma-binding')

async function image (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function images (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    image,
    images
  }