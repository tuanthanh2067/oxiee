const { createServer } = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const httpServer = createServer(app);
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGOOSE_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    httpServer.listen(PORT);
    console.log("connected to server");
  })
  .catch((err) => {
    console.error("unable to start the server", err);
    process.exit(1);
  });

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
