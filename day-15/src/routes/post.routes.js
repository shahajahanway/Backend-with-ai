const express = require("express")
const postRouter = express.Router()
const postPostController = require("../controllers/post.controller")
const multer = require("multer")
const  upload = ({storage: multer.memoryStorage()})


/**
 * POST /api/posts [protected]
 * - req.body = {caption,image-fle}
 */

postRouter.post("/",postPostController.createPostController)

module.exports = postRouter