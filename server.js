const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('./'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'src/view/index.html'));
});

require("./src/routes/client.routes")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`acesse http://localhost:${PORT} para ver os clientes inadimplentes`);
});
