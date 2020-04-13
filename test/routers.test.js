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

	describe("post", () => {

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).post("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).get("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).put("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).delete("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).options("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).head("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).patch("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).connect("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).trace("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).checkout("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).copy("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).lock("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).merge("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).mkactivity("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).mkcol("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).move("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty())["m-search"]("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).notify("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).propfind("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).proppatch("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).purge("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).report("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).search("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).subscribe("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).unlock("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).unsubscribe("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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

		test("Should correct Orbty encaded instance", () => {
			expect(
				((new Orbty()).all("/", () => {})) instanceof Orbty
			).toBeTruthy();
		});

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