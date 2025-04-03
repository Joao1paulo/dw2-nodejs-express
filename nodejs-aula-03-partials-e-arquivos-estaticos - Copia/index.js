//Importando o pacore do Express.js
const express = require("express");

//Carregando o método principal do Express (Iniciando o express)
const app = express();

//CONFIGURANDO A VIEW ENGINE - EJS
app.set(`view engine`, `ejs`);



//CRIANDO ROTA PRINCIPAL (RAIZ) DO SITE (utiliza o método .get que cria uma rota na aplicação)
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
    res.render("index");
} )

//ROTA DE PERFIL
app.get("/perfil/:nome?", (req, res) => {
    res.render("produtos");
});
 

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
    // Coletando o parâmetro da rota
    const produto = req.params.produto

    //Array com lista de produtos
    const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']

    res.render("produtos", {
        // Enviando a variável produto para a página
        //Variável chamada : valor da variável
        produto : produto,
        produtos : produtos
        
    })
})




//Iniciar o servidor (porta 8080)
//O método .listen do Express inicia um servidor (A funcão .listen necessita de alguns parâmetros)
app.listen(8081, (error) => {
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor" + error);
    } else {
        console.log("Servidor iniciado com sucesso!");
    }

} )








