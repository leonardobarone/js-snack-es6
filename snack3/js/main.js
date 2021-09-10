// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

                                // const funzione = (arr, min, max) => {

                                //     let newArr = [];
                                    
                                //     arr.forEach(
                                //         (element, index) => {
                                    
                                //             if (index + 1 >= min && index + 1 <= max){
                                //                 newArr.push(element);
                                //             }
                                    
                                //         }
                                //     );
                                    
                                //     return newArr;
                                // }

                                // let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];
                                // console.log(funzione(arr, 1, 8));


// PROVO A FARLO CON FILTER


function numeriCompresi(arr, min, max){

    const compresi = arr.filter((element, index) => {
    
        if (index >= min && index <= max){
            return element;
        }
    
    }
    
    );
    return compresi;
}


const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];

console.log(numeriCompresi(arr, 3, 5));
