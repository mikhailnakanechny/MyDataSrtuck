function workWithSet() {
    class MySet {
        constructor() {
            this.items = {};
        }

        has(value) {
            return this.items.hasOwnProperty(value);
        }

        add(value) {
            if (!this.has(value)) {
                this.items[value] = value;
                return true;
            }
            return false;
        }

        remove(value) {
            if (this.has(value)) {
                delete this.items[value];
                return true;
            }
            return false;
        }

        size() {
            return Object.keys(this.items).length;
        }

        values() {
            return Object.keys(this.items);
        }
    }

    function union(left, right) {
        let result = new MySet();

        left.values().forEach( val => result.add(val) );
        right.values().forEach( val => result.add(val) );

        return result;
    }

    function intersection(left, right) {
        let result = new MySet();

        left.values()
            .filter( val => right.has(val) )
            .forEach( val => result.add(val) );

        return result;
    }

    function difference(source, other) {
        let result = new MySet();

        source.values()
            .filter( val => !other.has(val) )
            .forEach( val => result.add(val) );

        return result;
    }

    function isSubset(smallSet, bigSet) {
        if (smallSet.size() > bigSet.size()) {
            return false;
        }

        return smallSet.values().every( val => bigSet.has(val) );
    }

    function basic() {
        console.log('\n\n---Set---');
        let set = new MySet();

        console.log('\nadd element:', 1);
        set.add(1);
        console.log('values:', set.values());
        console.log('Has 1:', set.has(1));
        console.log('size:', set.size());

        console.log('\nadd elements:', 'a,', '{param: "a"}');
        set.add('a');
        set.add({param: 'a'});
        console.log('values:', set.values());
        console.log('Has 1:', set.has(1));
        console.log('size:', set.size());

        console.log('\nremove element:', 1);
        set.remove(1);
        console.log('values:', set.values());
        console.log('Has 1:', set.has(1));
        console.log('size:', set.size());

        console.log('\nhas {param: "a"}', set.has({param: 'a'}));
        console.log('has {abc: "a"}', set.has({abc: 'a'}));

        console.log(set);

        let s = new Set();
        s.add('a');
        s.add(1);
        s.add({param: 'a'});

        console.log('\nhas {param: "a"}', s.has({param: 'a'}));
        console.log('has {abc: "a"}', s.has({abc: 'a'}));
        console.log(s.values());
        console.log(s);
    }

    function upperLevel() {
        let first = new MySet();
        first.add(1);
        first.add(2);
        first.add(3);
        first.add(4);

        let second = new MySet();
        second.add(3);
        second.add(4);
        second.add(5);
        second.add(6);

        console.log('Fisrt set:', first.values());
        console.log('Second set:', second.values());

        console.log('Union:', union(first, second).values());
        console.log('Intersection:', intersection(first, second).values());
        console.log('Difference:', difference(first, second).values());
        console.log('Is Subset:', isSubset(first, second));
    }

    // basic();
    upperLevel();
}
