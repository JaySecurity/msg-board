const express = require('express');
const router = express.Router();

const postCtrl = require('../../controllers/posts');

// GET all posts
router.get('/', postCtrl.index);

// POST new post
router.post('/', postCtrl.create);

module.exports = router;
