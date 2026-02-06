// Import Express
import express from "express";

// Create an Express app
const app = express();
const PORT = 8080;

// Set up the middleware to parse JSON request bodies
app.use(express.json());

// just for testing - making a request and a response?
app.get("/", (req, res) => {
    res.send("Hey, here's a response from the server.");
});

// make a request to an endpoint and log the response
app.get("/userboard", (req, res) => {
    console.log("Receved a GET request at /userboard");
    res.send("This the response from the /userboard endpoint.");
});

// In-memory storage for contacts
const contacts = [];

// TODO: Create a POST endpoint at /contact
// This should:
// 1. Receive the contact data from the request body
// 2. Validate the data (name, email, message)
// 3. Add it to the contacts array
// 4. Send back a success response

// TODO: Create a GET endpoint at /contacts
// This should:
// 1. Return all contacts in the array

// TODO: Start the server on port 3000
// Hint: app.listen(3000, () => { console.log('Server running...'); });
app.listen(PORT, () => {
    console.log("Server running on localhost:" + PORT);
});