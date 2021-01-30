const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

async function createComment (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  args.data.author.connect.id = requesterUser.id
  return forwardTo('prisma')(parent, args, ctx, info)
}
/*async createComment(parent, args, { req, prisma, getUserId }, info) {
  const userId = getUserId();
  const postExists = await prisma.exists.Post({
    id: args.data.post,
    published: true,
  });

  if (!postExists) {
    throw new Error("Unable to find post");
  }

  return prisma.mutation.createComment(
    {
      data: {
        text: args.data.text,
        author: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: args.data.post,
          },
        },
      },
    },
    info
  );
},*/

async function updateComment (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.data.author)|| ( requesterUser.role === "ADMIN"))
  //TODO : forwardTo if user === author || user.role === ADMIN args.data.author.connect.role === "ADMIN"
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteComment (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx)
  if((requesterUser.id = args.author)|| ( requesterUser.role === "ADMIN"))
  return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
  createComment,
  updateComment,
  deleteComment,
}