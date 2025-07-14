const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // for local dev (change to frontend URL in production)
  credentials: true,
}));

app.get("/", (req, res) => {
  res.send("Leaderboard backend is live!");
});
app.use('/api', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
