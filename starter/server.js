const express = require('express');
const path = require('path');

// ========================================
// TODO: Task 1 - Create Express App
// ========================================
const app = express();
const PORT = process.env.PORT || 3000;

// ========================================
// TODO: Task 2 - Serve Static Files
// ========================================
app.use(express.static(path.join(__dirname, 'public')));

// ========================================
// BONUS: Custom Request Logging Middleware
// ========================================
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ========================================
// TODO: Task 3 - Add Route Handlers
// ========================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// ========================================
// TODO: Task 4 - Create API Endpoint
// ========================================
app.get('/api/time', (req, res) => {
    const now = new Date();
    res.json({
        datetime: now.toISOString(),
        timestamp: now.getTime()
    });
});

// ========================================
// BONUS: Task 6 - Express Router (Optional)
// ========================================
const apiRouter = express.Router();

apiRouter.get('/time', (req, res) => {
    const now = new Date();
    res.json({
        datetime: now.toISOString(),
        timestamp: now.getTime()
    });
});

apiRouter.get('/info', (req, res) => {
    res.json({
        name: 'Workshop03 Express Server',
        version: '1.0.0',
        nodeVersion: process.version
    });
});

app.use('/api', apiRouter);

// ========================================
// TODO: Task 5 - Error Handling Middleware
// ========================================
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// ========================================
// Start the Server
// ========================================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
