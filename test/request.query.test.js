const Orbty = require("..");
const request = require("supertest");
const faker = require("faker");

describe("Request query parser", () => {
  test("Should response parsed url query", (done) => {
    const orbty = new Orbty();
    const name = faker.name.firstName();
    const number = faker.random.number({ min: 1, max: 100});

    orbty.get("/foo", ({ query }) => {
      return query;
    });

    request(orbty.server())
      .get(
        `/foo?name=${name}&num=${number}`
      ).expect(200, (err, { body }) => {
        expect(err).toBeNull();
        expect(body.name).toBe(name);
        expect(body.num).toBe(String(number));
        done();
      });
  });

  test("Should response empty query object", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", ({ query }) => {
      return query;
    });

    request(orbty.server())
      .get(
        "/foo"
      ).expect(200, (err, { body }) => {
        expect(err).toBeNull();
        expect(body).toMatchObject({});
        done();
      });
  });
});
