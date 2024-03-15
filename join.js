// o join ele insere uma nova string sem precisar mexer na original
let materias = ["matematica", "portugues", "ingles"];

console.log(materias.join("."));
//esperado que a cada virgula agora ele coloque um "."

console.log(materias.join("-"));
//esperado que a cada virgulha ele coloque um "-"

console.log(materias.join("_"));
//esperado que a cada virgula ele coloque um "_"
/////////////////////////////////
let elementos = ["ar", "fogo", "terra"];

console.log(elementos.join("*"));
//esperado que a cada virgula ele coloque um "*"

console.log(elementos.join("#"));
//esperado que a cada virgula ele coloque um "#"

console.log(elementos.join("+"));
//esperado que a cada virgula ele coloque um '+"