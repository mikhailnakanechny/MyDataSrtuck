
let arrTest = [23,8,41,5,7,45,98,12];

function bubleSort(arr){
    let n = arr.length;

    while (n>0){

        for (let i=0; i<arr.length; i++){
                   if (arr[i]>arr[i+1]) {
                       let tmp = arr[i + 1];
                       arr[i + 1] = arr[i];
                       arr[i] = tmp;
                   }
        }
        n=n-1;
    }
    return arr;
}

let arrSorted = bubleSort(arrTest);

console.log(arrSorted);