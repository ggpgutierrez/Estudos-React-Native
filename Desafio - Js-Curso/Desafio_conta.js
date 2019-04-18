class Conta {
	constructor(saldo)
  {
  this.saldo = 0;
  }
  
  deposito(valorDeposito){
  	this.saldo = this.saldo + valorDeposito;
   	document.write("Foi depositado " + valorDeposito + " Reais");
  }
  
  saque(valorSaque){
  	if(this.saldo <= valorSaque)
    {
    	document.write("Saldo insuficiente para saque");
    }
    else{
    	this.saldo = this.saldo - valorSaque;
    }
  }
  
  exibirSaldo(){
  	document.write("O saldo atual é: " + this.saldo);
  }
  
}


var conta = new Conta();
conta.deposito(100)
conta.saque(200);
conta.exibirSaldo();




