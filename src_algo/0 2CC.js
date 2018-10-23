let tetsNum=5;

function convertToBinarSystem(x){
    let arr=[], y;
    while (x!=0) {
        y=x%2;
        x=Math.floor(x/2);
        arr.push(y);
    }
    return arr.reverse().join('');
}

console.log (convertToBinarSystem(6));