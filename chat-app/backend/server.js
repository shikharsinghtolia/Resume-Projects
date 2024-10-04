const express = require("express");

const chats = require("./data/data");

const connectDB = require("./config/db");

const dotenv = require("dotenv");

const colors = require("colors");

const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("Api is here ");
});

app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorHandler)


app.listen(5000, console.log("Server started".yellow.bold));
