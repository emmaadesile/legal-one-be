const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("http");
require("dotenv").config;

const agents = require("./json-data/agents.json");
const logs = require("./json-data/logs.json");
const resolution = require("./json-data/resolution.json");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

https.createServer(app);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    data: {
      agents,
      logs,
      resolution,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Legal one is running on http://localhost:${PORT}`);
});
