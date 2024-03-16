// includes ele virifica se o que eu pedi está dentro do array 
let flores = ['girassol', 'margaridas', 'tulipas'];
console.log(flores.includes('margaridas'));
//se estiver, nesse caso o esperado é exibir true
console.log(flores.includes('ok'));
// aqui coloquei item que não está no array entao o esperado e ele exibir false

let anna = ['anna linda', 'anna perfeita', 'anna dona da razão'];
console.log(anna.includes('anna dona da razão'));

console.log(anna.includes('annafeia'));
