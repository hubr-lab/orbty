orbty
============
Simple and high performance web server structure for building scalable, practical and fast server applications.

```js
const Orbty = require('orbty');
orbty = new Orbty();

orbty.get("/welcome", ({ query }) => {
  return { hello: "world" };
});

orbty.listen(8080)

```

## Examples

Define how the data will be sent in the response.

### Basic
```js
// use simple function return
orbty.post("/post/:id", ({ body, params }) => {
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
  constructor() {
    super();
    this.code = 404;
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

### Middlewares

Orbty is compatible with all your favorite express middalawares and the syntax is the same. We decided to keep the same syntax for its familiarity and simplicity.

```js
const Orbty = require("orbty");
const middleware = require("my-middleware");

const orbty = new Orbty();

orbty.use(middleware);

// ...
```

### Util

#### Environment control


Read your environment variables using the env static method. It will validate the mandatory variables and will not let your application start if a specific mandatory variable has not been defined.

```js
const { env } = require("orbty");
console.log(env.ENVIRONMENT);
// An error will be thrown if this variable has not been defined.

```

## TODO

- Parse error optional.
- Improve sender.
- Implements general options.
- Improve streaming.
- Improve file download.
- Improve redirect.
- Improve HTTP server patterns.
- Implements tests.
- Add examples.
- Improve documentations.
