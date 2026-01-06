require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json("Server")
})

server.listen(process.env.PORT || 3000, () => {
  console.log("Server Is running")
})

