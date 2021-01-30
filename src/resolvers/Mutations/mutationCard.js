const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

async function createCard (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  args.data.author.connect.id = requesterUser.id
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateCard (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.data.author)|| ( requesterUser.role === "ADMIN"))
  //TODO : forwardTo if user === author || user.role === ADMIN
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteCard (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.author)|| ( requesterUser.role === "ADMIN"))
  return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
  createCard,
  updateCard,
  deleteCard
}