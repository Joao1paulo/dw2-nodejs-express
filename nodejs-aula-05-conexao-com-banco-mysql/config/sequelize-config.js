//Importando o sequelize
import Sequelize from "sequelize";

//Criando os dados de conexão com o banco de dados:
const connection = new Sequelize({
    //Tipo do banco:
    dialect: 'mysql',
    //onde está hospedado (localhost):
    host:'localhost',
    //nome usuário
    username: "root",
    //senha
    password: "",
    //nome banco
    //Comente a linha abaixo na primeira execução do projeto
    database: "sistemaLoja",
    //horário
    timezone: "-03:00",
});

export default connection;