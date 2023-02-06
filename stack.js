/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

  }

  /** peek(): return the value of the top node in the stack. */

  peek() {

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Stack;
