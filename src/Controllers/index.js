require('dotenv').config();
const { getPostList } = require('../Functions/apps/index.js')
const { VISOR_FOLDER, SLIDER_FOLDER } = process.env;
const { DB_LARUINATV_MEDIA } = require('../Misc/consts.js')

async function getPosts(){
    const posts = await getPostList(DB_LARUINATV_MEDIA, VISOR_FOLDER, SLIDER_FOLDER)
    return posts
}

module.exports = {
    getPosts
}