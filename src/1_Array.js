function workWithArray() {
    // ---Creation---
    let array = [];

    // let array = new Array();
    // let array = new Array(3);
    // let array = new Array(3, 4, 5);

    console.log(array);

    function addItem() {
        array.push('abc');
        array.push('foo');
        array.push('bar');

        array.unshift('first');
        array.unshift('second');
        array.unshift('third');

        console.log(array);
    }

    function getItem() {
        console.log('[get 0]:', array[0]);
        console.log('[get 4]:', array[4]);

        array[1] = 'new value';

        console.log(array);
    }

    function removeItem() {
        console.log('[pop]:', array.pop());
        console.log('[shift]:', array.shift());

        console.log(array);
    }

    addItem();
    getItem();
    removeItem();
}