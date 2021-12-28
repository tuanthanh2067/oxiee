const { createServer } = require("http");

const app = require("./app");

const httpServer = createServer(app);
const PORT = process.env.PORT || 8000;

httpServer.listen(PORT);
