const express = require('express');
const path = require('path');

const app = express();

// Serve static files (images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Root route to serve the menu page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
