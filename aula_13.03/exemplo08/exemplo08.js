/*
* exemplo de escopo
* var é global e por isso é possivel imprimi la mesmo ela sendo criada no if
* já o let é local e por isso se for declarada dentro de um bloco ela só será acessada por lá
*/
var nome = "Giovanna"

if(nome == "Giovanna"){
    var idade = 19
    //let idade = 19
}

console.log(idade)

//exemplo var
var nome = "João"
var nome = true

console.log(nome)


//exemplo let
let nome2 = "João"
nome2 = false       

console.log(nome2)

const nome3 = "Paulo"
//nome3 = "erro"
console.log(nome3)
