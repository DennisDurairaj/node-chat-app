const path = require("path");
const express = require("express");
const port = process.env.PORT || 9001;

const publicPath = path.join(__dirname, "../public");
const app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is up on port 9001");
});
