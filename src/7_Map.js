function workWithMap() {
    class MyMap {
        constructor() {
            this.items = {};
        }

        set(key, value) {
            this.items[key] = value;
        }

        get(key) {
            return this.has(key) ? this.items[key] : undefined;
        }

        remove(key) {
            if (this.has(key)) {
                delete this.items[key];
                return true;
            }

            return false;
        }

        has(key) {
            return this.items.hasOwnProperty(key);
        }

        keys() {
            return Object.keys(this.items);
        }

        values() {
            return this.keys()
                .map( key => this.items[key] );
        }

        size() {
            return Object.keys(this.items).length;
        }

        isEmpty() {
            return Object.keys(this.items).length === 0;
        }
    }

    console.log('\n\n---Map---');
    let map = new MyMap();

    console.log('\nAdd items');
    console.log('isEmpty:', map.isEmpty());

    console.log('add [key: "a", value: "First letter"]');
    map.set('a', 'First letter');

    console.log('add [key: "b", value: "Second letter"]');
    map.set('b', 'Second letter');

    console.log('add [key: "y", value: "Some letter"]');
    map.set('y', 'Some letter');

    console.log('isEmpty:', map.isEmpty());
    console.log('size:', map.size());
    console.log('keys:', map.keys());
    console.log('values:', map.values());

    console.log('\nGet Item');
    console.log('has "b":', map.has('b'));
    console.log('has "c":', map.has('c'));

    console.log('get "b":', map.get('b'));
    console.log('get "c":', map.get('c'));

    console.log('\nRemove Item');
    console.log('[before] keys:', map.keys());
    console.log('[before] values:', map.values());

    console.log('remove item with key = "b"', map.remove('b'));
    console.log('remove item with key = "another key"', map.remove('another key'));

    console.log('[after] keys:', map.keys());
    console.log('[after] values:', map.values());
}