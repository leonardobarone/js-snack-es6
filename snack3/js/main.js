// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function funzione(arr, min, max){

    let newArr = [];
    
    arr.forEach(
        (element, index) => {

            if (index + 1 >= min && index + 1 <= max){
                newArr.push(element);
            }

        }
    );

    return newArr;

}




let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];

console.log(funzione(arr, 1, 8));