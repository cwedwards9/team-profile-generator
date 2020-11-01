const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const obj = new Employee();
  expect(typeof(obj)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const obj = new Employee(name);
  expect(obj.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 5;
  const obj = new Employee("Bob", testValue);
  expect(obj.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@email.com";
  const obj = new Employee("Bob", 5, testValue);
  expect(obj.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Bob";
  const obj = new Employee(testValue);
  expect(obj.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 5;
  const obj = new Employee("Bob", testValue);
  expect(obj.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@email.com";
  const obj = new Employee("Bob", 5, testValue);
  expect(obj.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const obj = new Employee("Bob", 5, "test@email.com");
  expect(obj.getRole()).toBe(testValue);
});
