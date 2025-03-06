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
console.log(typeof(produtos));

let Produtos = ['Computador', 'Notebook', 'Celular', 'Tablet'];
console.log(Produtos);

console.log('Exibindo a lista pelos índices...');
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

//EXIBINDO A LISTA ATRAVÉS DO FOR
console.log('Exibindo a lista através do FOR..');
for (let c in Produtos){
    console.log(`${c} - ${Produtos[c]}`);
};

//EXIBINDO ATRAVÉS DO FOREACH
console.log("Exibindo através do forEach");
Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})