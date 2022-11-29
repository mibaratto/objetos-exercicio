const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//A Cópia
pokemon1Copia = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//B Add 'Ataques' no original
pokemon1.ataques = []
//console.table(pokemon1)

//C Objeto Ataque
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataque)


//D Add novo Ataque
const ataque2 = {
    ...ataque,
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataques.push(ataque2)

//E 
pokemon1Copia.ataques = []
const ataque3 = {
    ...ataque,
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}
pokemon1Copia.ataques.push(ataque3)

console.table(pokemon1)
console.table(pokemon1Copia)