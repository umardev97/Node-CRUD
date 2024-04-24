
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
const bodyParser = require('body-parser');
//configure mongoose

const express = require('express')
const app = express()
const port = 3000


mongoose.connect(
  "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(bodyParser.json());
app.use('/blogs', blogRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
