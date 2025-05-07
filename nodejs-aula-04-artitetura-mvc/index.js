//Importando o pacore do Express.js
//const express = require("express");

//Modo ES6 de importação:
import express from "express"

//Carregando o método principal do Express (Iniciando o express)
const app = express();

//Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosControllers.js";

//CONFIGURANDO A VIEW ENGINE - EJS
app.set(`view engine`, `ejs`);

//CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTÁTICOS
 app.use(express.static('public'));

//Configurando o Express para utilizar as rotas dos Controllers
app.use("/", ProdutosController);



//CRIANDO ROTA PRINCIPAL (RAIZ) DO SITE (utiliza o método .get que cria uma rota na aplicação)
// REQ -> trata a requisição
// RES -> trata a resposta
app.get("/", (req, res) => {
    res.render("index");
} )





//Iniciar o servidor (porta 8080)
//O método .listen do Express inicia um servidor (A funcão .listen necessita de alguns parâmetros)
app.listen(8081, (error) => {
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor" + error);
    } else {
        console.log("Servidor iniciado com sucesso!");
    }

} )








