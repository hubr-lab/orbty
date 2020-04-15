const Orbty = require("..");
const request = require("supertest");

const { HttpException  } = Orbty;

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

	test("Should fail on force generic error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", () => {
      throw new Error("without...");
    });

		request(orbty.server())
			.get("/foo")
			.expect(500, done);
	});

	test("Should fail on force coding error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", () => {
			return { willBreak }
    });

		request(orbty.server())
			.get("/foo")
			.expect(500, done);
	});

	test("Should fail on force coding error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", () => {
			throw new HttpException("there's nothing", 404);
    });

		request(orbty.server())
			.get("/foo")
			.expect(404, (err, res) => {
				expect(err).toBeNull();
				expect(res.text).toBe("there's nothing");
				done();
			});
	});
});