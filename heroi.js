let oDado = [ 1 , 2 , 3 , 4 , 5 , 6 ]
let lvArmas = ["Ferro","Prata" , "Bronze" , "Ouro" , "Platina" , "Diamante"]
let lv = 250
let nivel = ""
let asArmas = ["Adaga" , "Arco" , "Lança" , "Espada" , "Catalizador Mágico" , "Machado" ]
let osArtefatos = ["Anel de Ferro Sanguinário" , "Broche Dourado" , "Flecha das Memórias Ponderativas" , "Ânfora das Flores Escarlates" , "Bússola de Cobre" , "Tesouros das Areias Movediças"]
// inicia perguntando o nome ou indicando que é a fase preparatória
//TEXT 1 ...
//explicando melhor
//TEXT 2 ...
//seleção de arma - PRIMEIRO DADO
console.log("Primeiro dado mágico será rodado...")
let nDado = Math.floor(Math.random() * oDado.length)
console.log("Você tirou um " + (nDado + 1))
let retornoArmas = asArmas[nDado]
console.log("Irá acompanhado de um(a) " + retornoArmas)
let xp = (nDado + 1)*lv
console.log("Total de XP: " + xp)
//nivel da arma - SEGUNDO DADO
console.log("Segundo dado será rodado...")
nDado = Math.floor(Math.random() * oDado.length)
console.log("Você tirou um " + (nDado + 1))
let retArmaLv = lvArmas[nDado]
console.log("Sua arma será de " + retArmaLv)
let retornoLv = (nDado + 1) * lv
 xp = xp + retornoLv
console.log("Total de XP: " + xp)
//enter para limpar tela e ver classificação
//classificação do nível do herói
if (xp <= 1000){
         nivel = "Ferro" 
}else if((xp > 1000) && (xp <= 2000)){
         nivel = "Bronze"
}else if((xp > 2000) && (xp <=5000)){
         nivel = "Prata" 
}else if((xp > 6000) && (xp <= 7000)){ 
        nivel = "Ouro" 
}else if((xp >7000) && (xp <= 8000)){
        nivel = "Platina" 
}else if((xp >8000) && (xp <= 9000)){
        nivel = "Ascendente" 
}else if((xp >9000) && (xp <= 10000)){ 
        nivel = "Imortal" 
}else{
        nivel = "Radiante"
}
console.log("Nível do Herói: " + nivel)
//Primeira Fase
//TEXT 3...
//Explicando recompensa da fase
//TEXT 4...
//Inicio de batalha e avaliação se será capaz de passar pelos lobos
//TEXT 5...
console.log("A batalha se inicia...")
//primeiro dado 
console.log("Primeiro dado mágico será rodado...")
nDado = Math.floor(Math.random() * oDado.length)
console.log("Você tirou um " + (nDado + 1))
if(nivel='Ferro' || nDado<2){
        console.log("Você levou um bote e caiu no chão, toma " + (nDado+1)*lv + " de dano.")
}else{
        console.log("Você avança para a direção do oponente com " + retornoArmas + " inflinge " + (nDado+1)*lv + " de dano.") 
}



//segundo dado
//console.log("Primeiro dado mágico será rodado...")
//nDado = Math.floor(Math.random() * oDado.length)
//console.log("Você tirou um " + (nDado + 1))



//terceiro dado
console.log("Primeiro dado mágico será rodado...")
nDado = Math.floor(Math.random() * oDado.length)
console.log("Você tirou um " + (nDado + 1))









