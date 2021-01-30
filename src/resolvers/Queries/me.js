async function me (parent, args, ctx, info) {
    const user = {
        id: "blabla",
        lastName: "Robin"
    }
    return user
  }

  module.exports = {
    me
  }