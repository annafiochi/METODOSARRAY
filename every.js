// o every ele verifica se todos os elementos estão certos de acordo com a regra que voce quiser
//aqui eu estabeleço a minha regra no caso todos os itens tem que ser menores que 50
//true= certo
//false= errado
let valorestavel = (valoratual) => valoratual< 50;
let arraynumbers = [1, 28, 37, 10, 14,23];
// esperado que ele diga se e true or false
console.log(arraynumbers.every(valorestavel));
