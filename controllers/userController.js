const User = require("../models/User");
const History = require("../models/History");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
};

exports.claimPoints = async (req, res) => {
  const userId = req.params.userId;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId, points });
  await history.save();

  res.json({ message: "Points claimed", user, points });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.getHistory = async (req, res) => {
  const userId = req.params.userId;
  const history = await History.find({ userId }).sort({ claimedAt: -1 });
  res.json(history);
};
