//DECLARAÇÃO DE ARRAY (5 indices)
//let produtos = [ 'Computador', 'Notebook', 'Celular', 'Tablet'];

//EXIBINDO ÍNDICE ARRAY
//console.log(produtos[0]);

/*//PERCORRER ÍNDICES ARRAY
produtos.forEach(produto => {
    console.log(produto)
})*/

//.forEach    É UM MÉTODO/PARÂMETRO/FUNÇÃO
// O 'produto' REPRESENTA TODOS OS ÍNDICES, PODE TER QUALQUER NOME

// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

//EXIBINDO A LISTA ATRAVÉS DO FOR
console.log("Exibindo a lista através do FOR..");
for (let c in Produtos) {
  console.log(`${c} - ${Produtos[c]}`);
}

//EXIBINDO ATRAVÉS DO FOREACH
console.log("Exibindo através do forEach");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

//MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = [`Laranja`, `Maçã`, `Banana`];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = `Morango`;
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método PUSH - Insere um novo elemento no FINAL do vetor
vetor.push(`Abacaxi`);
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método UNSHIFT - Insere novo elemento no início do vetor
vetor[0] = `Pera`;
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift(`Laranja`);
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método LENGTH - Retorna o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3];
console.log(`Nossa lista de números é: ${numeros}`);
console.log(`O número de elementos do vetor é ${numeros.length}.`);

//Método SORT - Ordenar o vetor  *ELE NÃO FUNCIONA COM NÚMEROS DE MAIS DE UMA CASA
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`Agora primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}.`);

//Ordenação de números de forma CRESCENTE
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de número ordenada é: ${numeros}`);

//Ordenação de forma DECRESCENTE
console.log(numeros.sort((a, b) => b - a));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJETOS LITERAIS (não são derivados de classes)
//Objetos possuem Atributos e Métodos
//Lado esquerdo: chaves / Lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  //Atributos
  modelo: "gol",
  cor: "vermelho",
  //Métodos
  acelerar() {
    console.log("Acelerando");
  },
  frear(){
    console.log('Freando...');
  }
};
console.log(`O modelo do carro é ${carro.modelo}`)
console.log(`a cor do carro é ${carro.cor}`)
carro.acelerar()
carro.frear()

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const produto = {
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'PC moderno com bom desempenho',
};
console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca                          }`)


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const listaProdutos = [
    {
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'PC moderno com bom desempenho',
    },
    {
    nome: 'Celular',
    marca: 'Samsung',
    preco: 2000,
    descricao: 'Ótima velocidade de processamento',
    },
    {
    nome: 'Tablet',
    marca: 'Apple',
    preco: 12000,
    descricao: 'Ultra resistente. Muito Barato!',
    },
];

// Exibindo o ARRAY DE OBJETOS com forEach:
listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Marca: ${produto.marca}`)
    console.log(`Preço: ${produto.preco}`)
    console.log(`Descrição: ${produto.descricao}`)
    console.log()
 
})
 
// console.table
console.table(listaProdutos)
