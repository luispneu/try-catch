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

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch(erro){
      console.log(erro.stack)
    }
  } 

  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay!= "")
    {return {
      estudante: this.estudante,
      cosplay: this.cosplay,
      nota_cosplay: this.nota_cosplay
    }; } else{ 
    throw  new MeuError("todos os atributos tem que estar completos")
  }
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.atributos();

console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);

