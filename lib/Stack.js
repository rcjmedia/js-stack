/**
 * Class => Stack
 * -----------------------------
 * Creates a stack data structure.
 *
 * A stack is a data structure that allows adding and removing elements in a particular order
 * Everytime an item is added, it goes to the top of the 'stack' Everytime an item is removed,
 * the item on the top of the stack is removed.  A stack is a LIFO (last in first out) structure.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _size                 Default value should be set 0.
 */
class Stack {
    constructor(){
        this._storage = {};
        this._size = 0;
    }

    size(){
        return this._size; //This will return the length of the stack
    }

    push(item){
        //Push item on top of stack. //The key is the current size, the value is the item
        this._storage[this._size] = item;
        this._size++;
    }

    pop(){
        
        if(this._size === 0){
            return null; //This will return null if stack is empty
        }
        else{
            //Remove or "pop" item off stack //The key is length-1
            let popped = this._storage[this._size - 1];
            this._size--;
            return popped;
        }

    }
}


  /**
   * Stack Class Method => size()
   * -----------------------------
   * Returns the size of the stack.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Stack Class Method => push(item)
   * -----------------------------
   * Puts an item on top of the stack structure.
   *
   * @name push
   * @param item
   */

  /**
   * Stack Class Method => pop()
   * -----------------------------
   * Takes an item off the top of the stack and returns the item.
   *
   * @name pop
   * @return {Object}   Note that everything in javascript is an Object.
   */


module.exports = Stack;