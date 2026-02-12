const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const {toFile} = require()


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res) {
    console.log(req.body, req.file);

    const file = await imagekit.file.upload({
        file:new toFile(Buffer.from(req.file.Buffer), 'file'),
        fileName:"test"
    })

    res.send(file)
    
}

module.exports = createPostController