const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//A
console.log(filme.elenco[0])

//B
let elencoLength = filme.elenco.length
console.log(elencoLength)
console.log(filme.elenco[elencoLength - 1])

//C Todas transmissões
console.table(filme.transmissoesHoje)

//D Canal e horario
console.table(filme.transmissoesHoje[1])
//Só canal
console.table(`Canal Brasil: ${filme.transmissoesHoje[1].horario}`)

