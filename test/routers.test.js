const Orbty = require("../index");

describe("routers", () =>{
    describe("create", () => {

        test("Should correct Orbty encaded instance", () => {
            expect(
                ((new Orbty()).create(null, "/", () => {})) instanceof Orbty
            ).toBeTruthy();
        });

        test("Should error case path cannot be string or RegExp", () => {
            const orbty = new Orbty();

            expect(orbty.create.bind(orbty, null, [], () => {})).toThrowError(Error);
            expect(orbty.create.bind(orbty, null, Error, () => {})).toThrowError(Error);
            expect(orbty.create.bind(orbty, null, 11, () => {})).toThrowError(Error);
            expect(orbty.create.bind(orbty, null, {}, () => {})).toThrowError(Error);
            expect(orbty.create.bind(orbty, null, () => {}, () => {})).toThrowError(Error);
        });
    });
})