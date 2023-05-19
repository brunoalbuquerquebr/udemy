// function somarRenda(mes1: number, mes2: number, mes3: number): number {
//   return mes1 + mes2 + mes3;
// }

// console.log(somarRenda(780, 695, 2000));

function somarRenda(...meses: number[]): number {
  return meses.reduce(
    (rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual,
    0
  );
}

console.log(somarRenda(780, 695, 2000, 6500));
