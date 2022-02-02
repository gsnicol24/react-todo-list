const express = require("express");
const Router = require("./routes")
require("./mongo/database");

const app = express();

app.use(express.json());
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});