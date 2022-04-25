const { buildResponse } = require("../src/index");
const resToBe = require("./should-be");

describe("Tests", () => {
  it("should be equals", () => {
    const response = buildResponse();
    expect(response).toEqual(resToBe);
  });
});
