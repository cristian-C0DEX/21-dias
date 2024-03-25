let fome = prompt ('Você está com fome? ')
let dinheiro = prompt('Você tem dinheiro? ')
let restaurante = prompt('O restaurante está aberto ou fechado? ')

if (fome === "não" || dinheiro == "não") {
    console.log("Hoje a janta sera em casa");
} else if (dinheiro === "sim" && restaurante === "aberto") {
    console.log("Hoje jantaremos no restaurante");
} else {
    console.log("Peça um delivery!");
}