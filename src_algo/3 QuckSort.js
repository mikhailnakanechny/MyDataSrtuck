let arrTest = [999,23,8,41,5,7,45,98,12,1];

function quickSort(array)  {
    if (array.length<=1){
        return array;
    }

    let left=[], right=[], val=array[0];

    for (let i = 1; i < array.length; i++) {
        array[i]<val ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(val, quickSort(right));
}

let arrSorted1 = quickSort(arrTest);

console.log(arrSorted1);