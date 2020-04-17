const Orbty = require("../index");

describe("Orbty router instance", () => {
  test("Should return orbty instance", () => {
    const instance = new Orbty();

    expect(typeof instance.get).toBe("function");
    expect(typeof instance.use).toBe("function");
    expect(typeof instance.match).toBe("function");
  });

  test("Should use orbty with another orbty instance", () => {
    const instance = new Orbty();
    const anotherInstance = new Orbty();

    anotherInstance.get("/world", () => "OK");
    instance.use("/hello", anotherInstance);

    const match = instance.match("GET", "/hello/world");
    expect(match).not.toBeNull();
    expect(match instanceof Orbty).toBeTruthy();
  });
});
