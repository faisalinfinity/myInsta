require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./connection/connection");
const { userRoute } = require("./routes/userRoute");
const { postRoute } = require("./routes/postRoute");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/",userRoute)
app.use("/",postRoute)


const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected MongoDB on PORT ${port}`);
  } catch (error) {
    console.log(error)
  }
});
