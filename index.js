const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const cors = require("cors");
const port = process.env.PORT || 8080;

server.use(middleware);
server.use(router);
server.use(cors());

server.listen(port);
