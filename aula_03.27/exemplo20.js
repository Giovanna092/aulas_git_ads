class Operacoes{
    constructor(){

    }

    Somar(valorA, valorB){
        console.log(valorA+valorB)
    }

    //sobrecarga - não funciona javascript
    Somar(valorA, valorB, valorC){
        console.log(valorA+valorB+valorC)
    }
}


var objeto = new Operacoes()
objeto.Somar(10,20,30)
