'use strict';
class Stack {
    constructor (maxSize = 10) {
        this._maxSize = maxSize;
        this._size = 0;
    }
    get isEmpty (){
        return this._size === 0;
    }
    get size () {
        return this._size;
    }

    push(value) {
        if(this.size >= this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        this [`_${this.size}`] = value;
        this.size ++;
        return this.size;
    }
}
const stack = new Stack();
