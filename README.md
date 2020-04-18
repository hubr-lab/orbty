orbty
============
Simple and high performance web server structure for building scalable, practical and fast server applications.

```js
const Orbty = require("orbty");
orbty = new Orbty();

orbty.get("/welcome", ({ query }) => {
  return { hello: "world" };
});

orbty.listen(8080)

```

## Installation

Installation is easy with the [npm](https://www.npmjs.com) command

```bash
$ npm install orbty
```

## Current features

- High test coverage.
- Middlewares support.
- Compatible with express middleware.
- Automatic HTTP error handler.
- Integrated body-parser.
- Dynamic url.
- High performance.
- Static files.
- Support routing by instance.
- Compatible with your native server. (HTTP, HTTPS).


## Examples

Define how the data will be sent in the response.

### Basic
```js

// use simple function return
orbty.post("/post/:id", Orbty.json(), ({ body, params }) => {
  return {
    id: params.id,
    content: body.content
  };
});

// use response
orbty.post("/post/:id", (req, res) => {
  res.json({
    id: req.params.id,
    content: req.body.content
  });
});

```
### Errors

Orbty gives you the possibility to treat errors as you see fit. We recommend using the HttpException:

```js
orbty.get("/", (req, res) => {
  throw new Orbty.HttpException("Message error");
});
```
Set HTTP response status:
```js
orbty.get("/posts/:id", ({ params }) => {
  if (params.id === "1") {
    return "found";
  }

  throw new Orbty.HttpException("Post not found", 404);
});
```

Create your own errors with your own status codes. Set ```code``` attribute with HTTP status:

```js
class NotFound extends Orbty.HttpException {
  constructor(message) {
    super(message, 404);
  }
}
```
Use:
```js
orbty.get("/posts/:id", ({ params }) => {
  if (params.id === "1") {
    return "found";
  }

  throw new NotFound("Post not found");
});
```
Or use single response:
```js
orbty.get("/posts/:id", ({ params }, res) => {
  if (params.id === "1") {
    return "found";
  }

  res.status(404).send("Post not found");
});
```

Capture error handlers:
```js
orbty.error((error, req, res) => {
  console.error(error);
});
```

## Middlewares

Orbty is compatible with all your favorite express middleware and the syntax is the same. We decided to keep the same syntax for its familiarity and simplicity.

```js
const Orbty = require("orbty");
const middleware = require("my-middleware");

const orbty = new Orbty();

orbty.use(middleware);

// ...
```

The body-parser middleware already integrated with Orbty.

```js
const Orbty = require("orbty");
const orbty = new Orbty();

orbty.post("/posts", Orbty.json({ extended: true }), ({ body }) => {
  return body;
});

orbty.post("/posts/comment", Orbty.text(), ({ body }) => {
  return body;
});

// ...
```

### Static files

Send static files through your api. Orbty contains a middleware that solves this easily:

```js
const Orbty = require("orbty");
const orbty = new Orbty();

orbty.use(Orbty.static(`${__dirname}/media`));
orbty.use(Orbty.static(`${__dirname}/photos`));

// ...
```

## Cache

We currently have a separate Cache management module for Orbty and also compatible with Express.
Check [orbty-http-cache](https://www.npmjs.com/package/orbty-http-cache).

## Util

### Environment control


Read your environment variables using the env static method. It will validate the mandatory variables and will not let your application start if a specific mandatory variable has not been defined.

```js
const { env } = require("orbty");
console.log(env.ENVIRONMENT);
// An error will be thrown if this variable has not been defined.

```

## Orbty instancies

An Orbty instance acts as a router.

```js
const Orbty = require("orbty");

const orbty = new Orbty();
const orbtyV2 = new Orbty();

orbtyV2.get("/", () => "This is v2 API");

orbty.use("/v2", orbtyV2);

```

## Https
Use Orbty with https and others http protocols:
```js
const https = require("https");
const Orbty = require("orbty");
const fs = require("fs");

const orbty = new Orbty();

orbty.get("/", () => {
  return "this secure server";
})

// Node JS native documentation
const options = {
  key: fs.readFileSync("secury.pem"),
  cert: fs.readFileSync("secury-cert.cert")
};

https.createServer(options, orbty.server()).listen(443);

```

## TODO

- Improve documentations on external page
- Improve stream
