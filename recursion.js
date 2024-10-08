let arr = [1, 2, 3, 4, 5];
let arr2 = [10, 8, 6, 4, 2, 0];
let arr3 = [8, 6, 10, 4, 2, 0];

function sum(array) {

    if(array.length > 1) {
        return array.pop() + sum(array);
    }
    else {
        return array[0];
    }
}

function count(array) {
    
    if(array.length > 1) {
        return 1 + count(array.slice(1));
    }
    else {
        return 1;
    }
}

function findBiggest(array) {

    if(array.length == 2) {
        return array[0] > array[1] ? array[0] : array[1];
    }

    let max = findBiggest(array.slice(1));
    return array[0] > max ? array[0] : max;
}

console.log(findBiggest(arr));
