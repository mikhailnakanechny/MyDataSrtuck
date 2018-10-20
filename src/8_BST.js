function workWithBST() {
    class Node {
        constructor(value) {
            this.value = value;
            this.parent = null;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        add(value) {
            this.root = addWithin(this.root, value);

            function addWithin(node, value) {
                if (!node) {
                    return new Node(value);
                }

                if (node.value === value) {
                    return node;
                }

                if (value < node.value) {
                    node.left = addWithin(node.left, value);
                } else {
                    node.right = addWithin(node.right, value);
                }

                return node;
            }
        }

        has(value) {
            return searchWithin(this.root, value);

            function searchWithin(node, value) {
                if (!node) {
                    return false;
                }

                if (node.value === value) {
                    return true;
                }

                return value < node.value ?
                    searchWithin(node.left, value) :
                    searchWithin(node.right, value);
            }
        }

        remove(value) {
            this.root = removeNode(this.root, value);

            function removeNode(node, value) {
                if (!node) {
                    return null;
                }

                if (value < node.value) {
                    node.left = removeNode(node.left, value);
                    return node;
                } else if (node.value < value) {
                    node.right = removeNode(node.right, value);
                    return node;
                } else {
                    // equal
                    if (!node.left && !node.right) {
                        return null;
                    }

                    if (!node.left) {
                        node = node.right;
                        return node;
                    }

                    if (!node.right) {
                        node = node.left;
                        return node;
                    }

                    let minFromRight = node.right;
                    while (minFromRight.left) {
                        minFromRight = minFromRight.left;
                    }
                    node.value = minFromRight.value;

                    node.right = removeNode(node.right, minFromRight.value);

                    return node;
                }
            }

        }

        min() {
            if (!this.root) {
                return null;
            }

            let node = this.root;
            while (node.left) {
                node = node.left;
            }

            return node.value;
        }

        max() {
            if (!this.root) {
                return null;
            }

            let node = this.root;
            while (node.right) {
                node = node.right;
            }

            return node.value;
        }

        leftTraverse(cb) {
            doLeft(this.root, cb);

            function doLeft(node, cb) {
                if (node) {
                    doLeft(node.left, cb);
                    cb(node.value);
                    doLeft(node.right, cb);
                }
            }
        }

        rightTraverse(cb) {
            doRight(this.root, cb);

            function doRight(node, cb) {
                if (node) {
                    doRight(node.right, cb);
                    cb(node.value);
                    doRight(node.left, cb);
                }
            }
        }
    }

    function addItem() {
        console.log('\nAdd Item');
        console.log('add 13, 15, 14, 9, 20, 19, 21, 6, 11');

        bst.add(13);
        bst.add(15);
        bst.add(14);
        bst.add(9);
        bst.add(20);
        bst.add(19);
        bst.add(21);
        bst.add(6);
        bst.add(11);
    }

    function getItem() {
        console.log('\nGet Item');

        console.log('has 10', bst.has(10));
        console.log('has 15', bst.has(15));
        console.log('\n', bst);

        console.log('\nLeft Traverse:');
        bst.leftTraverse((val) => console.log(val));

        console.log('\nRight Traverse:');
        bst.rightTraverse((val) => console.log(val));

        console.log('min:', bst.min());
        console.log('max:', bst.max());
    }

    function removeItem() {
        console.log('\nRemove Item');

        bst.remove(15)
        console.log('remove 15');
        console.log(bst);

        console.log('\nLeft Traverse:');
        bst.leftTraverse((val) => console.log(val));
    }

    console.log('\n\n---Binary Search Tree---');
    const bst = new BinarySearchTree();

    addItem();
    getItem();
    removeItem();
}
