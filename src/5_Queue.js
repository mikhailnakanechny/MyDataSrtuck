function workWithQueue() {
    class Node {
        constructor (value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor () {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        enqueue(value) {
            const node = new Node(value);

            if (this.head) {
                this.tail.next = node;
                this.tail = node;
            } else {
                this.head = node;
                this.tail = node;
            }

            this.length++;
        }

        dequeue() {
            const current = this.head;
            this.head = this.head.next;
            this.length--;

            return current.value;
        }

        front() {
            return this.head.value;
        }

        isEmpty() {
            return this.length === 0;
        }

        size() {
            return this.length;
        }

        print() {
            let current = this.head;

            while(current) {
                console.log(current.value);
                current = current.next;
            }
        }
    }

    function addItem() {
        console.log('\n---Add Item---');

        console.log('isEmpty?', queue.isEmpty());
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.enqueue('d');
        queue.enqueue('e');
        console.log('after push - isEmpty?', queue.isEmpty());

        queue.print();
    }

    function getItem() {
        console.log('\n---Get Item---');

        console.log('First in Queue:', queue.front());
    }

    function removeItem() {
        console.log('\n---Remove Item---');

        console.log('Before:');
        queue.print();

        console.log('remove element:', queue.dequeue());
        console.log('remove element:', queue.dequeue());

        console.log('After:');
        queue.print();
    }

    // ---Creation---
    console.log('\n\n---Queue---');
    let queue = new Queue();

    addItem();
    getItem();
    removeItem();
}
