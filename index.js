// informação do ususario
let xp = 1300;
let nome = "Joao";
let patente = [
    "Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"

]
// codicional de ação
if(xp < 1000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[0])

}else if(xp > 1000 && xp <= 2000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[1])

}else if(xp > 2000 && xp <= 5000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[2])

}else if(xp > 6000 && xp <=7000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[3])

}else if(xp > 7000 && xp <= 8000 ){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[4])

}else if(xp > 8000 && xp <= 9000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[5])

}else if (xp > 9000 && xp <=  10000){
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[6])
}else{
    console.log("O Herói de nome " + nome + " está no nivel de " + patente[7])

}
