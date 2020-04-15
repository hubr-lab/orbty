const Orbty = require("..");
const request = require("supertest");

describe("Orbty All", () => {
    test("Should capture post method", (done) => {
        const orbty = new Orbty();

        orbty.all("/foo", ({ method }) => method);

        request(orbty.server()).post("/foo").expect("POST", done);
    });

    test("Should capture post method", (done) => {
        const orbty = new Orbty();

        orbty.all("/foo", ({ method }) => method);

        request(orbty.server()).get("/foo").expect("GET", done);
    });
});