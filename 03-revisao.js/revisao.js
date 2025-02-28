//comentario
/*comentario
de linhas*/

//variaveis
//var não usa no dia a dia
let nome ='Yuri';
const idade =21;

//operadores
const soma = 2+2;
const subtracao = 2-2;
const multiplicacao = 2*2;
const divisao = 2/2;
const resto = 3%2;

//operadores de comparação
const igual = 2 == 2;
const diferente = 2 != 2
const maior = 3>2;
const menor = 2<3;
const maiorouigual = 2>=3;
const menorouigual = 3<=2;

//estruturas condicionais
if(idade >= 18){
    console.log('Maior de idade')
}

if (idade >=18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

//operador ternario
const mensagem = idade >= 18 ? 'Maior de Idade' : "Menor de Idade"
console.log('Mensagem ->', mensagem)

//arrays listas

const frutas = ['Maça', 'banana', 'laranja']
console.log(frutas[1])

console.log(frutas.length)

frutas.push('uva')

console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)