const express = require("express");
const cors = require("cors");
require("dotenv").config();

const interviewRoutes = require("./routes/interviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "AI Interview Simulator API Running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});