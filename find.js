// o find ele acha o item do array de acordo com a regra 
let array1 = [5, 10, 12, 34];
// ele só vai exibir  o primeiro item do array
let encontrar = array1.find((Element) =>Element >10);
// exemp: coloquei numeros maiores do que 10, ele só vai exibir para mim o 12 
//que é o primeiro item que é maior que 10 na ordem que estabeleci no array
console.log(encontrar);
//esperado que ele exiba o 12

//exemp 2
let estacoes = [3, 40, 55, 20]
let achar = estacoes.find ((element) => element <2)
//nesse caso coloquei uma regra que nao se encaixa porque no array estabelecido nao tem numero menor que 2
console.log(achar);
//esperado que ele exiba "undefined" 