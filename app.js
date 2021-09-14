const express = require("express");
const app = express();
const Joi = require("@hapi/joi");
const movies = require("./movies");
const users = [{ name: "Faaiz", message: "Welcome to Nodejs" }];

app.use(express.json());

app.use("/abc", movies);

app.get("/", (req, res) => {
  res.json(users);
});

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Server started on Port ${port}`));
