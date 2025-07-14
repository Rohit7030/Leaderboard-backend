// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const users = [
  { name: "Rahul" },
  { name: "Kamal" },
  { name: "Sanak" },
  { name: "Priya" },
  { name: "Aman" },
  { name: "Divya" },
  { name: "Ravi" },
  { name: "Sneha" },
  { name: "Nikhil" },
  { name: "Anjali" },
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");

    await User.deleteMany(); // Clear existing users (optional)
    await User.insertMany(users);
    console.log("Users seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedUsers();
