/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const Orbty = require("../index");

describe("routers", () =>{
	describe("create", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.create.bind(orbty, null, [], () => {})).toThrowError(Error);
			expect(orbty.create.bind(orbty, null, Error, () => {})).toThrowError(Error);
			expect(orbty.create.bind(orbty, null, 11, () => {})).toThrowError(Error);
			expect(orbty.create.bind(orbty, null, {}, () => {})).toThrowError(Error);
			expect(orbty.create.bind(orbty, null, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("post", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.post.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.post.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.post.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.post.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.post.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("get", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.get.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.get.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.get.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.get.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.get.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("put", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.put.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.put.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.put.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.put.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.put.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("delete", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.delete.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.delete.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.delete.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.delete.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.delete.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("options", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.options.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.options.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.options.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.options.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.options.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("head", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.head.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.head.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.head.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.head.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.head.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("patch", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.patch.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.patch.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.patch.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.patch.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.patch.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("connect", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.connect.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.connect.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.connect.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.connect.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.connect.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("trace", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.trace.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.trace.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.trace.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.trace.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.trace.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("checkout", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.checkout.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.checkout.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.checkout.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.checkout.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.checkout.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("copy", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.copy.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.copy.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.copy.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.copy.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.copy.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("lock", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.lock.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.lock.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.lock.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.lock.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.lock.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("merge", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.merge.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.merge.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.merge.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.merge.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.merge.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("mkactivity", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.mkactivity.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.mkactivity.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.mkactivity.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.mkactivity.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.mkactivity.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("mkcol", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.mkcol.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.mkcol.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.mkcol.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.mkcol.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.mkcol.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("move", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.move.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.move.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.move.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.move.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.move.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("m-search", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty["m-search"].bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty["m-search"].bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty["m-search"].bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty["m-search"].bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty["m-search"].bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("notify", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.notify.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.notify.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.notify.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.notify.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.notify.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("propfind", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.propfind.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.propfind.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.propfind.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.propfind.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.propfind.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("proppatch", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.proppatch.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.proppatch.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.proppatch.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.proppatch.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.proppatch.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("purge", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.purge.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.purge.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.purge.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.purge.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.purge.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("report", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.report.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.report.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.report.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.report.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.report.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("search", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.search.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.search.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.search.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.search.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.search.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("subscribe", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.subscribe.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.subscribe.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.subscribe.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.subscribe.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.subscribe.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("unlock", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.unlock.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.unlock.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.unlock.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.unlock.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.unlock.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("unsubscribe", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.unsubscribe.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.unsubscribe.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.unsubscribe.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.unsubscribe.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.unsubscribe.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});

	describe("all", () => {
		test("Should error case path cannot be string or RegExp", () => {
			const orbty = new Orbty();

			expect(orbty.all.bind(orbty, [], () => {})).toThrowError(Error);
			expect(orbty.all.bind(orbty, Error, () => {})).toThrowError(Error);
			expect(orbty.all.bind(orbty, 11, () => {})).toThrowError(Error);
			expect(orbty.all.bind(orbty, {}, () => {})).toThrowError(Error);
			expect(orbty.all.bind(orbty, () => {}, () => {})).toThrowError(Error);
		});
	});
});