const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// imports routes
const postRouters = require("./src/tagee/routes");

app.get("/", (req, res) => {
  res.send("API service");
});
app.use("/tagee", postRouters);
app.listen(port, () => {
  console.log("App listening on port " + port);
});
