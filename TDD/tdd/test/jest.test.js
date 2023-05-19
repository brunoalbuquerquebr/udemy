test("Devo conhecer jest", () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test("Devo trabalhar com objetos", () => {
  const obj = {
    name: "Joao",
    email: "joao@gmail.com",
  };
  expect(obj).toHaveProperty("name", "Joao");
  expect(obj.name).toBe("Joao");

  const obj2 = {
    name: "Joao",
    email: "joao@gmail.com",
  };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
