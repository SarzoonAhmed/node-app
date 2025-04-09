const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON (optional, for POST requests)
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Node.js app running inside Docker!');
});

// Sample POST route (optional)
app.post('/echo', (req, res) => {
    res.json({
        message: 'You sent:',
        data: req.body
    });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
