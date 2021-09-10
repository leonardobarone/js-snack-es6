// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bici = [
    {
        "nome" : "Bici da città",
        "peso" : 6.5,
    },
    {
        "nome" : "Mountain bike",
        "peso" : 8.1,
    },
    {
        "nome" : "Bici ibrida",
        "peso" : 7.7,
    },
    {
        "nome" : "Bici a scatto fisso",
        "peso" : 8.5,
    },
    {
        "nome" : "Bici pieghevole",
        "peso" : 7.2,
    },
];
// Stampare a schermo la bici con peso minore 
let biciLeggera = bici[0];

for(let i = 1; i < bici.length; i++){
    if(bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

const {nome, peso} = biciLeggera;

console.log(`La bici più leggera è la ${nome} che pesa ${peso} kg`);

// utilizzando destructuring e template literal