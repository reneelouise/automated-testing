// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["renee", "imoh", "lous", "michael"])).toBe("imoh");
  expect(findShortestString(["goa", "oia", "dubai", "italy"])).toBe("goa");

});
