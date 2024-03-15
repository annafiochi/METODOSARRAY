//o filtro ele filtra os itens de acordo com a regra estabelecida 
//every= apenas fala se esta certo ou nao
//filter= fala qual palava esta certa
let palavra = ['linda', 'maravihosa', 'exuberante','extravagante'];
// aqui coloquei pra exibir qual palavra tem menos de 14 caracteres 
let resultado = palavra.filter((palavra) => palavra.length <14);

console.log(resultado);
//esperado que ele exiba 'linda', 'maravihosa', 'exuberante','extravagante'

//////////////////////
let paises = ["frança", "bolivia", "senegal", "brasil"];
//agora vamos utilizar o fuction retornapaises que vai ler o primeiro letra de todas as palavras em busca de letra que escolhemos
function retornapaises (valor){
    if (valor.charAt(0) =="b")
return valor;
}
let resultado01 = paises.filter(retornapaises);
console.log(resultado01);
