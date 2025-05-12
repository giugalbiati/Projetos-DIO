// 3️⃣ Escrevendo as classes de um Jogo

class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi, ataqueHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
        this.ataqueHeroi = ataqueHeroi
    }
    atacar(){
        console.log(`A Heroína ${this.nomeHeroi} de ${this.idadeHeroi} é uma ${this.tipoHeroi} e realiza o ataque utilizando ${this.ataqueHeroi}.`)
    }
}

let guerreiro = new heroi("Atena", "500 anos", "guerreira", "espada")
let mago = new heroi("Afrodite", "300 anos", "maga", "magia")
let monge = new heroi("Gaia", "800 anos", "monge", "artes marciais")
let ninja = new heroi("Hera", "1500 anos", "ninja", "shuriken")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()

