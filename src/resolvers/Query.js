const { me } = require('./auth')
const { user, users } = require('./Queries/queryUser')
const { post, posts } = require('./Queries/queryPost')
const { card, cards } = require('./Queries/queryCard')
const { category, categories } = require('./Queries/queryCategory')
const {comment, comments } = require('./Queries/queryComment')
const { product, products } = require('./Queries/queryProduct')
const { image, images } = require('./Queries/queryImage')

const Query = {
    me,
    user,
    users,
    post,
    posts,
    card,
    cards,
    comment,
    comments,
    category,
    categories,
    product,
    products,
    image,
    images
}

module.exports = {
    Query
}