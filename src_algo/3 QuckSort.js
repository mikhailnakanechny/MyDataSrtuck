let arrTest = [23,8,41,5,7,45,98,12];

function quickSort(array)  {
    if (array.length<=1){
        return [];
    }

    let left=[], right=[], val=array[0];

    for (let i = 1; i < array.length; i++) {
        array[i]<val ? left.push(array[i]) : right.push(array[i]);
    }

    return left.concat(right);
}



let arrSorted = quickSort(arrTest);

console.log(arrSorted);