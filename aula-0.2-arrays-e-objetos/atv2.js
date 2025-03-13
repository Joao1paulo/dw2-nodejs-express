//ARRAYS
const estados = [ ' Acre', ' Alagoas', ' Amazonas', ' Bahia', ' Ceará', ' Espírito Santo', ' Goiás', ' Maranhão', ' Mato Grosso', ' Mato Grosso do Sul', ' Minas Gerais', ' Pará', ' Paraíba', ' Paraná', ' Pernambuco', ' Piauí', ' Rio de Janeiro', ' Rio Grande do Norte', ' Rio Grande do Sul', ' Rondônia', ' Roraima', ' Santa Catarina', ' São Paulo', ' Sergipe', ' Tocantins', ' Distrito Federal']
estados.forEach((produtos, i) => {
    console.log(`${i - 1} - ${produtos}`);
})