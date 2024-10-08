
let arr = [5, 3, 6, 2, 10];
let arr2 = [10, 8, 6, 4, 2, 0];


// Essa primeira implementação do selection sort funciona quando a array original não pode ser modificada, porém é menor performatica
function selectionSort(array) {

    let copyArray = [...array];
    let novoArray = [];

    for (const item of array) {
        
        let menor = copyArray[0];
        let menorIndice = 0;

        for(let index = 0; index < copyArray.length; index++) {
            if(copyArray[index] < menor) {
                menorIndice = index;
            }
        }
        novoArray.push(copyArray.splice(menorIndice, 1)[0]);
    }

    return novoArray;
}


// Essa segunda implementação do selection sort é para quando se pode alterar a array original, é bem + performatica
function selectionSort2(array) {

    for (let i of array.keys()) {
        
        let menorIndice = i;
        
        for(let j = i; j < array.length; j++) { ///estava errando aqui porque o j sempre tem que ser igual a i para seguir a partir dos elementos que não foram ordenados ainda
            if(array[j] < array[menorIndice]) {
                menorIndice = j;
            }
        }
        
        [array[i], array[menorIndice]] = [array[menorIndice], array[i]];
    }

    return array;
}

console.log(selectionSort2(arr));

