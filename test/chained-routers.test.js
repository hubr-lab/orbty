/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const Orbty = require("../index");

describe("routers", () =>{

  describe("use", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).use("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("create", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).create(null, "/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("post", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).post("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("get", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).get("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("put", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).put("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("delete", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).delete("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("options", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).options("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("head", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).head("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("patch", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).patch("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("connect", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).connect("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("trace", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).trace("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("checkout", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).checkout("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("copy", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).copy("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("lock", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).lock("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("merge", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).merge("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("mkactivity", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).mkactivity("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("mkcol", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).mkcol("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("move", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).move("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("m-search", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty())["m-search"]("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("notify", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).notify("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("propfind", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).propfind("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("proppatch", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).proppatch("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("purge", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).purge("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("report", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).report("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("search", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).search("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("subscribe", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).subscribe("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("unlock", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).unlock("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("unsubscribe", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).unsubscribe("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });

  describe("all", () => {

    test("Should correct Orbty encaded instance", () => {
      expect(
        ((new Orbty()).all("/", () => {})) instanceof Orbty
      ).toBeTruthy();
    });
  });
});
