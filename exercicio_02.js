class MeuError extends Error{
  constructor(menssage){
  super(menssage);
  this.name = "Meu erro";
  }
}


class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch(erro){
      console.log(erro.stack)
    }
  } 

  atributos(){
      if (this.nome != "" && this.idade != "" && this.especie != ""){
      } else{ 
      throw  new MeuError("todos os atributos tem que estar completos")
    }
    }
  }

const estudante = new Estudante("", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);   
console.log(atributos.idade);  

console.log(atributos.turma); 

