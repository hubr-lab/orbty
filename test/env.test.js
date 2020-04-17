const { env } = require("../index");
const faker = require("faker");

describe("Required environment", () => {

  beforeAll(async () => {
    process.env.RANDOM_ENV = faker.random.word();
  });

  test("Should return the defined environment variable", () => {
    expect(env.RANDOM_ENV).toBe(process.env.RANDOM_ENV);
  });

  test("Should return an error for an undefined environment variable", () => {
    expect(() => env.NOT_RANDOM_ENV).toThrowError(Error);
  });
});
