//CLASSES E OBJETOS
class Heroi{
    
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    
    correr(){
        return `O herói ${Heroi.nome} está correndo`
    
    }

    andar(){
        return `O herói ${Heroi.nome} está andando`
    }

    atacar(){
        return `O herói ${Heroi.nome} está atacando`
    }

    defender(){
        return `O herói ${Heroi.nome} está defendendo`
    }



}



const HomemAranha = new Heroi('Homem-Aranha', 100, 90, 70);
HomemAranha.teia = 1
HomemAranha.SentidoAranha = function(){
    return `O Homem-Aranha detectou perigo`;
}

const Superman = new Heroi('Superman', 1000, 200, 400);
Superman.PodeVoar = 0
Superman.PodeVoar = function(){
    return `O Superman está usando sua visão de calor`;
}

const Batman = new Heroi('Batman', 50,  40, 45);
Batman.Esconder = 1
Batman.investigar = function(){
    return `O Batman está investigando um crime`;
}


console.log(`O herói ${HomemAranha.nome}, tem ${HomemAranha.vida} de vida, tem ${HomemAranha.velocidade} de velocidade, tem ${HomemAranha.forca} de força`);
console.log(`O herói ${Superman.nome}, tem ${Superman.vida} de vida, tem ${Superman.velocidade} de velocidade, tem ${Superman.forca} de força`);
console.log(`O herói ${Batman.nome}, tem ${Batman.vida} de vida, tem ${Batman.velocidade} de velocidade, tem ${Batman.forca} de força`);




//MANIPULAÇÃO DE DATAS
const mostrarData = (data) => {
    data.setDate(data.getDate() + 3);
    data.setMonth(data.getMonth() + 2);
    data.setFullYear(data.getFullYear() + 1);
   
    console.log(
      `Data: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    );
  };
  const pegarData = new Date();
  mostrarData(pegarData);



  //MANIPULAÇÃO DE MOEDAS
  let salario = 4200.65;
  const conversaosalario = (conversao) => {
    console.log(conversao.toLocaleString("eng", {style: "currency", currency:"USD"} ) );
    console.log(conversao.toLocaleString("eng", {style: "currency", currency:"EUR"} ) );
  }
  conversaosalario(salario);



  //FORMATAÇÃO DE STRINGS
  let nome = 'João'
  const formatar = (nome) => {
    console.log(nome.toUpperCase())
    console.log(nome.toLowerCase());
    console.log(nome.length);
  }

  formatar(nome);
