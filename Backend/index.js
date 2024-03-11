const express = require("express");
const app = express();
const cors = require("cors");

// require('./models/index')

app.use(cors());
app.use(express.json());

app.use(require("./routes/pricing"));
app.use(require("./routes/registration"));
app.use(require("./routes/login"));


app.listen(3000, () => {
  //listening on port 5000
  console.log("Server has started on port 3000");
});
