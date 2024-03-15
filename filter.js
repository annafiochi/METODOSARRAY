//o filtro ele filtra os itens de acordo com a regra estabelecida 
//every= apenas fala se esta certo ou nao
//filter= fala qual palava esta certa
let palavra = ['linda', 'maravihosa', 'exuberante', 'extravagante'];
// aqui coloquei pra exibir qual palavra tem menos de 14 caracteres 
let resultado = palavra.filter((palavra) => palavra.length < 14);

console.log(resultado);
//esperado que ele exiba 'linda', 'maravihosa', 'exuberante','extravagante'

//////////////////////

//nesse caso eu quero que ele filtre qual dos itens começa com a letra B
let paises = ["frança", "bolivia", "senegal", "brasil"];
//agora vamos utilizar o fuction retornapaises que vai ler a primeiro letra de todas as palavras em busca da letra que escolhemos
//dentro do fuction eu faço a condiçao e uso o "charAt" que vai por cada letra em busca do indice de letra que escolhemos
function retornapaises(valor) {
 // nesse caso como quero que seja a primeira letra nosso indice e '0'  
     if (valor.charAt(0) == "b")
// utilizo == para explicar que um valor é igual a outro é uma condiçao que precisa ser verdadeira para executar o if
        return valor;
}
let resultado01 = paises.filter(retornapaises);
console.log(resultado01);
