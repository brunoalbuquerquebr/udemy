class Produto {
  nome: string;
  valor: number;

  constructor(produtoNome: string, produtoValor: number) {
    this.nome = produtoNome;
    this.valor = produtoValor;
  }
}

const play5 = new Produto("Play5", 5000);
