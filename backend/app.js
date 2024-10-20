const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing all routes
const dataRoutes = require("./routes/data.route");

const app = express();
const PORT = process.env.PORT;

// using all routes
app.use("/api/data", dataRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
