/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
    
    if(!nome || !idade || !turma){
      if (this.nome != "" && this.idade != "" && this.especie != ""){
      } else{ 
      throw  new Error("todos os atributos tem que estar completos")
    }
    }
  }

  mostrarAtributos(){
    try{
      return this.atributos();
    } catch(erro){
      console.log(erro.stack)
    }
  } 

  atributos() {
    return {
      nome: this.nome,
      idade: this.idade,
      turma: this.turma
    };
  }
}

const estudante = new Estudante("", 16, "3A");

const atributos = estudante.mostrarAtributos();

console.log(atributos.nome);   
console.log(atributos.idade);  

console.log(atributos.turma); 

