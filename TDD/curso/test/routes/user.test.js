const request = require('supertest')

const app = require('../../src/app')

test('Deve listar todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200)
            expect(res.body.length).toBeGreaterThan(0)
        })
});

test('Deve inserir um usário ', () => {
    const email = `${Date.now()}@email.com`
    return request(app).post('/users')
        .send({ name: 'Walter', email, password: '123456' })
        .then((res) => {
            expect(res.status).toBe(201)
            expect(res.body.name).toBe('Walter')
        })
});

test('Não deve inserir um usuário sem nome', () => {
    return request(app).post('/users')
        .send({ email: 'br@email.com', password: '123' })
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Nome é obrigatório')
        })
});