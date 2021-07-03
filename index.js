const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const postRouter = require("./routes/postRouter");
const bookRouter = require("./routes/bookRouter");

let port = 3000;

// our app can communicate with the client via json
app.use(bodyParser.json());

app.get("/", (request, response) => {
  // the request contains information about the client
  // the response is what we send back to the client
  console.log(request);
  response.send("hello you reached the index  page");
});

app.use("/posts", postRouter);
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
