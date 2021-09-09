// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadre = [
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Atalanta",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Juventus",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Napoli",
        puntiFatti : 0,
        falliSubiti : 0,
    },
];
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
const random = (a) => Math.floor(Math.random() * a + 1);

for (let i = 0; i < squadre.length; i++) {
    squadre[i].falliSubiti = random(100);
    squadre[i].puntiFatti = random(100);
}

// Infine usando la destrutturazione 
//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const arr = [];
let obj = {};


for (let i = 0; i < squadre.length; i++) {
    

    obj.nome = squadre[i].nome;
    obj.falliSubiti = squadre[i].falliSubiti;
    
    arr.push(obj);


   

    // arr.push(nome, falliSubiti)

}

console.log(arr)
console.log(obj)