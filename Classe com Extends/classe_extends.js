class Animal {
	constructor(cor, peso){
  	this.cor = cor;
    this.peso = peso;
  
  }
  getCor(){
  return this.cor;
  }
  
  getPeso(){
  return this.peso;
  }
  dormir(){
  	document.write("Dormir");
  }

}

class Cao extends Animal {
	
  latir(){
  document.write("latindo");
  }
}

class Passaro extends Animal {
	voar(){
  document.write("Estou voando")
  }
}

var cao = new Cao("Amarelo", 50);

document.write("A cor do cão é " + cao.getCor() + " e seu peso é " + cao.getPeso() + " Kg " + ". O Cachorro está " ) + cao.latir();
