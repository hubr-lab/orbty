const Orbty = require("./index");
const http = require("http");

const app = new Orbty();
const app2 = new Orbty();

app2.get("/:w", ({ params }) => params);
app.use("/v2", app2);

app.use((_req, _res, next) => {
  console.log("ware 1");
  next();
});

app.use((_req, _res, next) => {
  console.log("ware 2");
  next();
});

app.get("/", (_req, res) => {
  res.send(15);
});

app.get("/user/:id", (req, _res) => {
  return {
    params: req.params,
    query: req.query
  };
});

const port = process.env.PORT || 8080;

http.createServer(app.server()).listen(port, () => {
  console.info(`Server listening on ${port}`);
});

