//Aqui vou dar exemplos de nomes exibindo todos os itens dos arrays (1,2)
let array1 = ['anna', 'giovanna', 'mariana'];
let array2 = ['sophia', 'leticia', 'thiago'];
let array3 = array1.concat(array2);
//itens = dentro do colchetes 
//o concat ele exibe todos os itens presentes de todos os arrays criados
//e também posso escolher para não exibir todos os itens de todos os arrays, apenas os que eu quero

console.log(array3);
//o esperado é mostrar array ["anna", "giovanna", "mariana","sophia", "leticia", "thiago"]
//aqui vou fazer exemplo exibindo os itens apenas do array 5 e 7
let array4 = ['A', 'b', 'c', 'd'];
let array5 = ['e', 'f', 'g', 'h'];
let array6 = ['i', 'j', 'k', 'l'];
let array7 = ['m', 'n', 'o', 'p']
let array8 = array5.concat(array7);
// o esperado é que ele me mostre apenas os itens do array 5 e 7

console.log(array8);