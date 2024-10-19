/**
 * Calcula o MOD11 para o número informado
 * @param valor Número base para o calculo
 * @param limite Limite da casa de multiplicação
 * Para CPF assume o valor de 12, para CNPJ o valor de 9.
 * @returns Retorna o DV calculado
 */
exports.mod11 = function (clearValue, limite) {
  var valor = String(clearValue).replace(/\D/g, "");
  var sum = 0;
  var mult = 2;
  for (var i = valor.length - 1; i >= 0; i--) {
    sum += mult * +valor[i];
    if (++mult > limite) {
      mult = 2;
    }
  }
  var dv = ((sum * 10) % 11) % 10;
  return dv;
};
