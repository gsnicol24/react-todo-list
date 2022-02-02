const express = require("express");
const Router = require("./routes")
const  cors = require('cors')
require("./mongo/database");

const app = express();

app.use(express.json());
app.use(Router);
app.use(cors())

app.listen(3100, () => {
  console.log("Server is running at port 3100");
});