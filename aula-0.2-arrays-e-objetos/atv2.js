//ARRAYS
const estados = [ ' Acre', ' Alagoas', ' Amazonas', ' Bahia', ' Ceará', ' Espírito Santo', ' Goiás', ' Maranhão', ' Mato Grosso', ' Mato Grosso do Sul', ' Minas Gerais', ' Pará', ' Paraíba', ' Paraná', ' Pernambuco', ' Piauí', ' Rio de Janeiro', ' Rio Grande do Norte', ' Rio Grande do Sul', ' Rondônia', ' Roraima', ' Santa Catarina', ' São Paulo', ' Sergipe', ' Tocantins', ' Distrito Federal']
estados.forEach((produtos, i) => {
    console.log(`${i - 1} - ${produtos}`);
})

//OBJETOS LITERAIS
const jp = [
    {
        nome: "João Paulo",
        idade: 19,
        cidade: "Registro",
        hobby: "Tenis de mesa",
        musica: "Can't stop - Earth Wind & Fire"
},
]

jp.forEach((jp) => { //
    console.log(`\n Nome: ${jp.nome} \n Idade: ${jp.idade} \n Cidade: ${jp.cidade} \n hobby: ${jp.hobby} \n Música preferida: ${jp.musica}`)
    }
 )


//ARRAY DE OBJETOS
const filmes = [
    {
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        ano: "1972", 
        classificacao: "16 anos"
    }, {
        titulo: "A Lista de Schindler",
        genero: "Drama",
        ano: "1993", 
        classificacao: "14 anos"
    }, {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        genero: "Aventura",
        ano: "2003",
        classificacao: "12 anos"
    }, {
        titulo: "O Rei Leão",
        genero: "Animação",
        ano: "1994",
        classificacao: "Livre"
    }
]

filmes.forEach ( (filmes) => {
    console.log(`\n Título: ${filmes.titulo} \n Gênero: ${filmes.genero} \n Ano: ${filmes.ano} \n Classificação: ${filmes.classificacao}`)
})
