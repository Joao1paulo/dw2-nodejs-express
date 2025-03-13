//CRIAÇÃO DE CLASSE
class Carro {
  //Atributos
  //constructor atua como construtor da classe e armazena as variáveis e os parâmetros usados.
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //MÉTODOS
  buzinar() {
    return "Beep, beep!";
  }
}

//CRIAR UMA INSTÂNCIA(OBJETO) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

//Instância carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

//ADICIONANDO UM NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul";

//ADICIONANDO UM NOVO MÉTODO
carroEsportivo.turbo = function () {
  return "Vrummm! O carro está acelerando!!!";
};

console.log(
  `O carro ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon} , ${carroEsportivo.turbo}`
);
