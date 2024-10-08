let arr = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];


function search(array, escolha) {

    let alto = array[array.length - 1];
    let baixo = 0;
    let meio;

    for(let index = 1; meio != escolha; index++) {
        meio = Math.floor((alto + baixo) / 2);

        if(meio > escolha) {
            alto -= 1;
        } else if (meio < escolha) {
            baixo += 1;
        }
    }
}

function search2(array, escolha) {
    let baixo = 0;
    let alto = array.length - 1; // aqui precisa ser length -1 pois caso precise procurar pelo ultimo elemento, estara setado no ultimo indice

    while(baixo <= alto) {
        let meio = Math.floor((alto + baixo) / 2);

        if(array[meio] == escolha) {
            return meio;
        } else if (array[meio] > escolha) {
            alto = meio - 1;
        } else if (array[meio] < escolha) {
            baixo = meio + 1;
        }
    }

    return null;
}

console.log(search2(arr, -1));
;