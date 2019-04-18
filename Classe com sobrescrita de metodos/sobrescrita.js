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
	
  constructor(cor, peso, raca){
			super(cor,peso);
      this.raca = raca;
  
  }
  getRaca(){
  	return this.raca;
  }
  latir(){
  document.write("latindo");
  }
  
  dormir(){
  super.dormir()
  	document.write(" como um cão");
  }
}

class Passaro extends Animal {
	voar(){
  document.write("Estou voando")
  }
}

var cao = new Cao("Amarelo", 50, "PitBull");
document.write(cao.getRaca());