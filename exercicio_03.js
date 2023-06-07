class MeuError extends Error{
  constructor(menssage){
  super(menssage);
  this.name = "Meu erro";
  }
}
class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    return this.atributos()
  }

  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != "")
    {return {
      estudante: this.estudante,
      cosplay: this.cosplay,
      nota_cosplay: this.nota_cospla
    }; } else{ 
    throw  new MeuError("todos os atributos tem que estar completos")
  }
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

