const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets (CSS, JS, img, songs, etc.)
app.use(express.static(path.join(__dirname)));

// Explicit route to serve index.html for root path '/'
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Fallback to index.html for any other route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start server listening on 0.0.0.0 so cloud providers can reach it
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
