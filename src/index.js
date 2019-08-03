const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

//Setup static directory to serve files
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
