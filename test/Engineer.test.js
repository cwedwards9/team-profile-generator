const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "Bob123";
  const obj = new Engineer("Bob", 5, "test@email.com", testValue);
  expect(obj.github).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "Bob123";
  const obj = new Engineer("Bob", 5, "test@email.com", testValue);
  expect(obj.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const obj = new Engineer("Bob", 5, "test@email.com", "Bob123");
  expect(obj.getRole()).toBe(testValue);
});