const app = require('../routes/add');

describe("Addition", function () {
    it("The function should add 2 numbers", function () {
        var value = app(5, 6);
        expect(value).toBe(11);
    });
});