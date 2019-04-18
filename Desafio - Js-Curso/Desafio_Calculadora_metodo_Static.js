class Calculadora{
	constructor(valor1, valor2){
  	this.valor1 = valor1;
    this.valor2 = valor2;
  }
  
  static Somar(numero1, numero2){
  	return numero1+numero2
  
  }
}

 var total = Calculadora.Somar(10, 9);
 document.write(total);