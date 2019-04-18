class funcionario{
	constructor(salarioBase){
  		this.salario = salarioBase;
      this.total = 0;
    }
    calcularSalario(salario){
    	this.total = this.salario + 100;
    }
    exibirSalario(){
   	 document.write("Salário: " + this.total);
    }
}

class Programador extends funcionario{

   calcularSalario(){
   	super.calcularSalario();
    this.total = this.total + 300;
   }
}

var Funcionario = new funcionario(500);
Funcionario.calcularSalario();
Funcionario.exibirSalario();
document.write("</br>")

var programador = new Programador(500);
programador.calcularSalario();
programador.exibirSalario();