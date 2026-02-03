// TODO: Import Express
import express from "express";

// TODO: Create an Express app
const app = express();
const PORT = 8080;

// TODO: Set up middleware to parse JSON request bodies
// Hint: app.use(express.json());

// TODO: Serve static files from the 'public' folder
// Hint: app.use(express.static('public'));

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