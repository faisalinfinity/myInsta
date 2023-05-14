require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./connection/connection");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected MongoDB on PORT ${port}`);
  } catch (error) {
    console.log(error)
  }
});
