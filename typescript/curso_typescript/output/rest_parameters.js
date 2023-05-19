"use strict";
// function somarRenda(mes1: number, mes2: number, mes3: number): number {
//   return mes1 + mes2 + mes3;
// }
// console.log(somarRenda(780, 695, 2000));
function somarRenda() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    return meses.reduce(function (rendaTotal, rendaAtual) { return rendaTotal + rendaAtual; }, 0);
}
console.log(somarRenda(780, 695, 2000, 6500));
//# sourceMappingURL=rest_parameters.js.map