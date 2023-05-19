test('Devo conhecer jest', () => {
    let number = null
    expect(number).toBeNull()
    number = 10
    expect(number).not.toBeNull()
    expect(number).toBe(10)
    expect(number).toEqual(10)
    expect(number).toBeGreaterThan(9)
    expect(number).toBeLessThan(11)
});

test('Devo trabalhar com objetos', () => {
    const obj = {
        name: 'Jose',
        email: 'jose@email.com'
    }
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('name', 'Jose')
    expect(obj.name).toBe('Jose')

    const obj2 = {
        name: 'Jose',
        email: 'jose@email.com'
    }
    expect(obj).toEqual(obj2)
    expect(obj).toBe(obj)
});