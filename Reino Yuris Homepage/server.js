// server.js
const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Set the public directory for static assets
// `public_html` will serve your HTML files, CSS, JS
app.use(express.static(path.join(__dirname, 'public_html')));

// `assets` will serve your image and other static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Define routes
app.get('/quiz1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
});

app.get('/quiz1/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'profile.html'));
});

app.get('/quiz1/hometown', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'hometown.html'));
});

app.get('/quiz1/food', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'food.html'));
});

app.get('/quiz1/tourist', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'tourist.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
