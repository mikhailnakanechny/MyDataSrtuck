function workWithStack() {
    class Node {
        constructor (value) {
            this.value = value;
            this.next = null;
        }
    }

    class Stack {
        constructor () {
            this.head = null;
            this.length = 0;
        }

        push(value) {
            const node = new Node(value);

            if (this.head) {
                node.next = this.head;
                this.head = node;
            } else {
                this.head = node;
            }

            this.length++;
        }

        pop() {
            const current = this.head;
            this.head = this.head.next;
            this.length--;

            return current.value;
        }

        peek() {
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

        console.log('isEmpty?', stack.isEmpty());

        console.log('add element:', 'a');
        stack.push('a');

        console.log('add element:', 'b');
        stack.push('b');

        console.log('add element:', 'c');
        stack.push('c');

        console.log('add element:', 'd');
        stack.push('d');

        console.log('add element:', 'e');
        stack.push('e');

        console.log('after push - isEmpty?', stack.isEmpty());

        stack.print();
    }

    function getItem() {
        console.log('\n---Get Item---');

        console.log('Top element:', stack.peek());
    }

    function removeItem() {
        console.log('\n---Remove Item---');

        console.log('Before:');
        stack.print();

        console.log('remove element:', stack.pop());
        console.log('remove element:', stack.pop());

        console.log('After:');
        stack.print();
    }

    // ---Creation---
    console.log('\n\n---Stack---');
    let stack = new Stack();

    addItem();
    getItem();
    removeItem();
}
