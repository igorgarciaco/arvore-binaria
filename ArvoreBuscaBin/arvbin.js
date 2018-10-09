function ArvoreBinaria() {
    this.noRaiz = null;
}

ArvoreBinaria.prototype = {

    constructor: ArvoreBinaria,

    // Adiciona um novo valor
    adicionar: function(valor) {

        // Cria um novo objeto para armazenar o valor atual
        var novoNo = {
            valor: valor,
            esq: null,
            dir: null
        };

        var noAtual;

        if (this.noRaiz == null) {
            // Caso a árvore esteja vazia
            this.noRaiz = novoNo
        } else {
            noAtual = this.noRaiz

            while (true) {
                if (valor < noAtual.valor) {
                    // Atribuímos um novo nó a esquerda caso não exista
                    // ou seguimos adiante usando o nó da esquerda como nó atual
                    if (noAtual.esq == null) {
                        noAtual.esq = novoNo
                        break;
                    } else {
                        noAtual = noAtual.esq
                    }
                } else if (valor > noAtual.valor) {
                    // Atribuímos um novo nó a direita caso não exista
                    // ou seguimos adiante usando o nó da direita como nó atual
                    if (noAtual.dir == null) {
                        noAtual.dir = novoNo
                        break
                    } else {
                        noAtual = noAtual.dir
                    }
                } else {
                    break
                }
            }
        }
    },

    // Verifica se o valor existe ou não na árvore
    contem: function(valor) {
        var encontrado = false,
            noAtual = this.noRaiz

        while (!encontrado && noAtual) {

            // Se o valor é menor que o do nó atual, atribua o nó da esquerda
            if (valor < noAtual.valor) {
                noAtual = noAtual.esq
            }

            // Se o valor é maior que o do nó atual, atribua o nó da direita
            else if (valor > noAtual.valor) {
                noAtual = noAtual.dir
            }

            // Valor do nó atual é igual ao valor passado como parâmetro
            else {
                encontrado = true
                // console.log("Contém o valor informado :)")
            }
        }

        return encontrado

    },

    

    // Percorre a árvore e exibe os valores em ordem, pré ordem e pós ordem no console
    percorrer: function(no) {
        if (no) {
            this.percorrer(no.esq)
            console.log(no.valor)
            this.percorrer(no.dir)
        }
    },

    percorrer_pre: function(no){
        if(no){
            console.log(no.valor)
            this.percorrer_pre(no.esq)
            this.percorrer_pre(no.dir)
        }

        // esq,dir,valor
    },

    percorrer_pos:  function(no){
        if(no){
            this.percorrer_pos(no.esq)
            this.percorrer_pos(no.dir)
            console.log(no.valor)
        }
    },    

    // O menor é o nó do mais baixo nível a esquerda
    menorNo: function(no) {
        if (!no) {
            return 0
        }
        if (no.esq) {
            return this.menorNo(no.esq)
        }
        return no.valor
    },

    // O maior é o nó do mais baixo nível a direita
    maiorNo: function(no) {
        if (!no) {
            return 0
        }
        if (no.dir) {
            return this.maiorNo(no.dir)
        }
        return no.valor
    },
    remove: function(no) {
            if (no == null) {
                console.error("Arvore Vazia")
            } else if (no < no.valor) {
                no.esq = this.remove(no.esq)
                
            } else if (no > no.valor) {

                no.dir = remove(no.dir)
                //Se não tiver elemento esquerdo só nós resta o da direita
        //         return console.log("achei é o valor "+no.valor)
            } else if (no.esq != null && no.dir != null){
            console.log("Removido valor: "+no.valor)
        }
            
        
    }
}


var arvore = new ArvoreBinaria()
arvore.adicionar(9)
arvore.adicionar(1)
arvore.adicionar(8)
arvore.adicionar(5)
arvore.adicionar(12)
arvore.adicionar(11)
arvore.adicionar(4)

//Verifca se contém o valor No inserido
arvore.contem(7)
// console.log(arvore.maiorNo(arvore.noRaiz)) retorna o maior No
arvore.maiorNo(arvore.noRaiz) 
//retorna o menor No
arvore.menorNo(arvore.noRaiz) 


//tentativa de remoção
arvore.remove(arvore.noRaiz)

//Listagem


console.log(arvore.contem(7))

console.log("EM ORDEM")
arvore.percorrer(arvore.noRaiz) 

console.log("PRÉ ORDEM")
arvore.percorrer_pre(arvore.noRaiz)
console.log("PÓS ORDEM")
arvore.percorrer_pos(arvore.noRaiz)