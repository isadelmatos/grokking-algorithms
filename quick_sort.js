let arr = [2, 9, 18, 40, 17, 80, 36, 12, 4, 7, 63];

function quickSort(array) {

    if(array.length < 2) return array;

    let indicePivo = Math.round(array.length / 2)
    let pivo = array[indicePivo];
    let arrMenor = [];
    let arrMaior = [];

    for (let index = 0; index < array.length; index++) {
        if(indicePivo != index) {
            array[index] < pivo ? arrMenor.push(array[index]) : arrMaior.push(array[index]);
        }
    }

    return quickSort(arrMenor).concat(pivo, quickSort(arrMaior));
}

console.log(quickSort(arr));
