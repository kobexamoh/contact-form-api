// Your frontend JavaScript will go here!
// This is where you'll handle form submissions and API calls

// Initialize Express...is this the old way?
// const app = require("express")();
// const PORT = 8080;

// is this the new way?
import express from "express";
const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log("Server running on localhost:" + PORT);
});