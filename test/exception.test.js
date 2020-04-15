const { HttpException } = require("..");

describe("Exception", () => {
    test("Http Exception", () => {
        try {
            throw new HttpException("will break...");
        } catch (err) {
            expect(err.code).toBe(500);
            expect(err.message).toBe("will break...");
        }
    });

    test("Http Exception", () => {

        class NotFoundException extends HttpException {
            constructor(message) {
                super();
                this.code = 404;
                this.message = message;
            }
        }

        try {
            throw new NotFoundException("was not found");
        } catch (err) {
            expect(err.code).toBe(404);
            expect(err.message).toBe("was not found");
        }
    });
});