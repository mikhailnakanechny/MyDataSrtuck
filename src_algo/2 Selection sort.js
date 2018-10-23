let arrTest = [23,8,41,5,7,45,98,12];

function SelectionSort(arr)       {
    for (let i = 0; i < arr.length; i++) {
          let min=i;
          for (let j = i+1; j < arr.length; j++) {
              if (arr[j]<arr[min]){
              let temp=arr[min];
              arr[min]=arr[j];
              arr[j]=temp;
          }
        }
    }
    return arr;
}



let arrSorted = SelectionSort(arrTest);

console.log(arrSorted);

