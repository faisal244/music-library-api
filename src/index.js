// import express
const express = require("express");

// create express app by declaring a variable
const app = express();
// decalre the port
const PORT = process.env.PORT || 4000;

// Declare your middlewares here
// JSON is a method
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
	console.log(`listening to port on http://locaalhost:${PORT}`);
});
