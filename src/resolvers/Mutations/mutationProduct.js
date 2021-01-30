const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

async function createProduct (parent, args, ctx, info) {
  //const requesterUser = await getUser(ctx)
 // console.log(args.data.author.connect)
  console.log(args)
  args.data.author.connect.id = requesterUser.id
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateProduct (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.data.author)|| ( requesterUser.role === "ADMIN"))
  //TODO : forwardTo if user === author || user.role === ADMIN args.data.author.connect.role === "ADMIN"
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteProduct (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.author)|| ( requesterUser.role === "ADMIN"))
  return forwardTo('prisma')(parent, args, ctx, info)
}


module.exports = {
  createProduct,
  updateProduct,
  deleteProduct
}