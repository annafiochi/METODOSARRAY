//ushift ele insere numeros apenas no inicio da sequencia e exibe a sequencia, contando tambem quantos itens tem dentro do array
// isso serva porque caso seja uma sequencia de itens muito grande eu nao precise mexer na sequencia em si
let arraynumero = [3, 4, 5,];
//aqui vou inserir 1 e 2 para sequencia ficar certinha 
console.log(arraynumero.unshift(1, 2,));
// o esperado que ele ensira o numero 1 e 2 na listinha numerica

console.log(arraynumero);
//isso nao funciona so com numeros posso fazer com animais por exemplo
let arrayanimais = ['gato', 'cachorro', 'coelho'];
console.log(arrayanimais.unshift('pulga', 'leao'))
// o esperado e ele mostrar a quantidade de animais que tem dentro do array e quais animais 
console.log(arrayanimais);
