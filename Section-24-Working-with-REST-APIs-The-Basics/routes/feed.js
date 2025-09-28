const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/posts', (req, res) => feedController.getPosts);

router.post('/post',(req, res) => feedController.createPost);

module.exports = router;