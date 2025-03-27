//Importando o pacore do Express.js
const express = require("express");

//CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine', 'ejs')


//Carregando o método principal do Express (Iniciando o express)
const app = express();

//CRIANDO ROTA PRINCIPAL (RAIZ) DO SITE (utiliza o método .get que cria uma rota na aplicação)
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
    res.send("<h1>Bem vindo ao meu primeiro site em Node.js!</h1> <br> <p> Iniciando os estudos com Node.js! </p>");
} )

//ROTA DE PERFIL
app.get("/perfil/:nome?", (req, res) => {
    //res.send("<h1> Perfil do usuário! </h1>");
    //Coletando o parâmetro da rota e gravando na variável
    const nome = req.params.nome;
    if(nome){
        res.send(`<h2> Olá, ${nome}! Seja bem-vindo ao seu perfil! </h2>`);
    } else {
        res.send(`<h2> Faça login para acessar o seu perfil! </h2>`);
    }
    
});


//ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.render("produtos")
})<




//Iniciar o servidor (porta 8080)
//O método .listen do Express inicia um servidor (A funcão .listen necessita de alguns parâmetros)
app.listen(8081, (error) => {
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor" + error);
    } else {
        console.log("Servidor iniciado com sucesso!");
    }

} )








