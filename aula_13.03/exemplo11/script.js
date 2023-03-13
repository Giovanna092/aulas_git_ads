function coletarDados(){
    let p,a
    p= Number(document.getElementById("peso").value)
    a= Number(document.getElementById("altura").value)

    calcularIMC(p,a)
}

function calcularIMC(peso, altura){
    /**
     * imc = peso / (altura * altura)
     */
    let imc = peso / (altura*altura)

    classificarIMC(imc)
    
    document.getElementById("res").innerHTML = imc

}

function classificarIMC(imc){
    /*
    imc <= 18.5 = desnutrição
    imc > 18.5 && <= 25 = peso normal
    imc > 25 && <= 30 = sobrepeso
    imc > 30 && <= 35 = obesidade nivel 1
    imc > 35 && <= 40 = obesidade nivel 2
    imc > 40 = obesidade nivel 3
    */

    let status = 0;
    if(imc <= 18.5) {
        status = "desnutrição"
    } else if(imc <= 25){
        status = "peso normal"
    } else if(imc <= 30){
        status = "sobrepeso"
    } else if(imc <= 35){
        status = "obesidade nivel 1"
    } else if(imc <= 40){
        status = "obesidade nivel 2"
    } else{
        status = "obesidade nivel 3"
    }

    document.getElementById("status").innerHTML = status
}