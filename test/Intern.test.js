const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "OSU";
  const obj = new Intern("Bob", 5, "test@email.com", testValue);
  expect(obj.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "OSU";
  const obj = new Intern("Bob", 5, "test@temail.com", testValue);
  expect(obj.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const obj = new Intern("Bob", 5, "test@email.com", "OSU");
  expect(obj.getRole()).toBe(testValue);
});