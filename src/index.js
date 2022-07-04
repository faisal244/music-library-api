// import express
const express = require("express");

// create express app by declaring a variable
const app = express();
// decalre the port
const PORT = process.env.PORT || 4000;

const routes = require("./routes");

// Declare your middlewares here
// JSON is a method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Do this next bit at the end, because your app wills tart to break if not. Do your routes folders and files first
app.listen(PORT, () => {
	console.log(`listening to port on http://localhost:${PORT}`);
});
