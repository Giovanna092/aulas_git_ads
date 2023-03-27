class Livro {
    constructor(pNome, Ppreco){
        this.nome = pNome;
        this.preco = Ppreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}
    
    get Preco(){return this.preco}
    set Nome(pPreco){this.preco = pPreco}

}

var obj_livro1 = new Livro("Use a cabeça Java", 200)
//console.log("Nome do livro: " + obj_livro1.nome)
console.log("O livro "+ obj_livro1.nome + " custa "+ obj_livro1.preco+ " reais")