const { createPost, updatePost,  } = require('./Mutations/mutationPost')
const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { createCard, updateCard, deleteCard } = require('./Mutations/mutationCard')
const { createProduct, updateProduct, deleteProduct } = require('./Mutations/mutationProduct')
const { createImage , updateImage, deleteImage } = require('./Mutations/mutationImage')
const { createCategory, updateCategory,  deleteCategory } = require('./Mutations/mutationCategory')
const { createComment, updateComment, deleteComment } = require('./Mutations/mutationComment')
const { login, signup } = require('./auth')

const Mutation = {
    createPost,
    updatePost,

    createCard,
    updateCard,
    deleteCard,

    createProduct,
    updateProduct,
    deleteProduct,

    createImage,
    updateImage,
    deleteImage,

    createComment,
    updateComment,
    deleteComment,

    createCategory,
    updateCategory,
    deleteCategory,

    createUser,
    updateUser,
    deleteUser,

    login,
    signup
}

module.exports = {
    Mutation
}