const request = require("supertest");

const app = require("../src/app");

test("Deve listar usuários", () => {
  return request(app)
    .get("/users")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty("name", "Joao");
    });
});

test("Deve inserir um user", () => {
  return request(app)
    .post("/users")
    .send({ name: "Bruno Alb", email: "bruno@gmail.com" })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe("Bruno Alb");
    });
});
