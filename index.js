const express = require("express");

const app = express();
const PORT = 3000;

const startTime = Date.now();

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Node.js Docker Application</h1>
        <p>Application is running successfully!</p>
        <a href="/health">Check Application Health</a>
    `);
});

// Health monitoring UI
app.get("/health", (req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Application Health Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body {
                font-family: Arial;
                background: #f1f5f9;
                text-align: center;
                padding: 50px;
            }
            .card {
                background: white;
                padding: 30px;
                max-width: 450px;
                margin: auto;
                border-radius: 12px;
                box-shadow: 0 4px 15px #ccc;
            }
            .status {
                color: #16a34a;
                font-size: 25px;
                font-weight: bold;
            }
            .dot {
                color: #16a34a;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Health Dashboard</h1>
            <h2 class="status">
                <span class="dot">●</span> HEALTHY
            </h2>
            <p>Application: Node.js</p>
            <p>Environment: Docker</p>
            <p>Port: ${PORT}</p>
            <p>Uptime: ${uptime} seconds</p>
            <p>Server Time: ${new Date().toLocaleString()}</p>
            <button onclick="location.reload()">Refresh Status</button>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node.js application running on port ${PORT}`);
});
