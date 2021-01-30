const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

async function createPost (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  args.data.author.connect.id = requesterUser.id
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function updatePost (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
  createPost,
  updatePost
}