function workWithHeap() {
    class Heap {
        constructor() {
            this.items = [];
            this.last = 0;
        }

        add(value) {
            const swap = (firstPos, secondPos) => {
                let temp = this.items[ firstPos ];
                this.items[ firstPos ] = this.items[ secondPos ];
                this.items[ secondPos ] = temp;
            };

            this.last++;
            this.items[this.last] = value;

            let currentPosition = this.last;
            let parentPosition;
            let parent;

            while(currentPosition > 1) {
                parentPosition = Math.floor(currentPosition / 2);
                parent = this.items[ parentPosition ];

                if (parent < value) {
                    return;
                }

                swap(parentPosition, currentPosition);
                currentPosition = parentPosition;
            }
        }

        getFirst() {
            return this.items[1];
        }

        removeFirst() {
            const swap = (firstPos, secondPos) => {
                let temp = this.items[ firstPos ];
                this.items[ firstPos ] = this.items[ secondPos ];
                this.items[ secondPos ] = temp;
            };

            if (this.last === 0) {
                return;
            }

            let value = this.items[ this.last ];
            this.items[1] = value;
            this.items.length = this.last;
            this.last--;

            let currentPosition = 1;
            let leftChildPos;
            let rightChildPos;

            while (currentPosition <= this.last) {
                leftChildPos = 2 * currentPosition;
                rightChildPos = 2 * currentPosition + 1;

                if ((leftChildPos > this.last) && (rightChildPos > this.last)) {
                    // leaf node
                    return;
                }

                if ( (leftChildPos <= this.last) && (this.items[leftChildPos] < value) ) {
                    swap(currentPosition, leftChildPos);
                    currentPosition = leftChildPos;
                } else if ( (rightChildPos <= this.last) && (this.items[rightChildPos] < value) ) {
                    swap(currentPosition, rightChildPos);
                    currentPosition = rightChildPos;
                } else {
                    return;
                }
            }
        }

        print() {
            console.log(this.items.slice(1));
        }
    }

    console.log('\n\n---Min Heap---');
    let heap = new Heap();
    heap.add(31);
    heap.add(26);
    heap.add(14);
    heap.add(42);
    heap.add(19);
    heap.print();

    console.log('Min:', heap.getFirst());

    console.log('\nRemove min item');
    heap.removeFirst();
    console.log('Min:', heap.getFirst());

    heap.print();
}