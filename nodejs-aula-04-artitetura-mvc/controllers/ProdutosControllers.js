import express from 'express';
// Carregando o método do express para gerenciamento de Rotas

const router = express.Router()

//ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
    // Coletando o parâmetro da rota

    //Array com lista de produtos
    const produtos = [
        {
            nome: "Celular Motorola E22",
            preco: 1200,
            categoria: "Eletroportáteis"
        },
        {
            nome: "Tablet Samsung",
            preco: 900,
            categoria: "Eletrônicos"
        },
        {
            nome: "Notebook Lenovo",
            preco: 3200,
            categoria: "Computadores"
        },
        {
            nome: "Fone Bluetooth",
            preco: 150,
            categoria: "Periféricos"
        }
];

    res.render("produtos", {
        // Enviando a variável produto para a página
        //Variável chamada : valor da variável
        produtos : produtos
    })


})


//Exportando o módulo (Se for exportar mais de um objeto coloca dentro de {} )
export default router;



