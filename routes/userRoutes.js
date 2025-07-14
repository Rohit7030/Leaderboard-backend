const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getHistory
} = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);
router.post('/claim/:userId', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history/:userId', getHistory);

module.exports = router;
