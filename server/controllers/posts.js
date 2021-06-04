const Post = require('../models/Post');

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    const posts = await Post.find({});
    res.json(posts).status('200');
  } catch (err) {
    console.log(err.message);
  }
}

async function create(req, res) {
  try {
    let newPost = await Post.create(req.body);
    newPost = await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.log(err);
  }
}
