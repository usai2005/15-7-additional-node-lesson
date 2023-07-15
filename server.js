const express = require("express");

const app = express();

//1998 - cjs-require
//2015 - ES6-import

// require("./calculator");

// require("./oop");

const file = require("./files");

console.log(file.display);

app.get("/", async (req, res) => {
  const data = await file.display();

  res.send(data);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
