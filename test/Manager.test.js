const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 101;
  const obj = new Manager("Bob", 5, "test@email.com", testValue);
  expect(obj.officeNumber).toBe(testValue);
});

test("getOfficeNumner() should return the offie number", () => {
  const testValue = 101;
  const obj = new Manager("Bob", 5, "test@email.com", testValue);
  expect(obj.getOfficeNumber()).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const obj = new Manager("Bob", 5, "test@email.com", 101);
  expect(obj.getRole()).toBe(testValue);
});
