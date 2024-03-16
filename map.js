// o map executa a função pedida no array sem alterar o array original 
let array1 = [1, 16, 20, 10];
//aqui a  função foi multiplicar todos os numeros por 2
let map = array1.map((x) => x * 2);
//utilizei o "*" porque significa multiplicação
console.log(map);
//esperado que ele exiba "'2, 32, 40, 20'"

//exemp2
let numbers = [4, 20, 16, 12];
// nesse exemplo inves de  multiplicar vou dividir usando "/"
let map1 = numbers.map((x) => x / 2);
console.log(map1);
// esperado que ele exiba "'2, 10, 8, 6"