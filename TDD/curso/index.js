function helloWord() {
    console.log('Hello!');
}

const saudacao = () => {
    let dataAtual = new Date()
    return dataAtual.getHours() <= 12 ? "Bom dia" : dataAtual.getHours() <= 18 ? "Boa tarde" : "Boa noite"
}

helloWord()
console.log(saudacao());