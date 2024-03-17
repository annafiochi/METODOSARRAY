//Atividade Array - Método Splice()
//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

//Sintaxe:
//array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
//indice: Índice o qual deve iniciar a alterar a lista.
//deleteCount: Um inteiro indicando o número de antigos elementos que devem ser removidos.
    //Se deleteCount é 0, nenhum elemento é removido.
//elemento1, ..., elementoN: Os elementos a adicionar na lista.

//Testes Práticos:

let mes = ['Janeiro', 'Março', 'Abril', 'Junho'];
mes.splice(1, 0, 'Fevereiro'); // Adiciona um elemento no índice 1
console.log(mes);

mes.splice(4, 1, 'Maio');// Substituí um elemento no índice 1
console.log(mes)

mes.splice(0, 1);// Remove o primeiro elemento
console.log(mes)