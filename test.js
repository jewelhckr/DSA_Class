// DSA Test

// Implement a stack using an array - length, push, pop, peekLast, peekFirst, isEmpty, print

class Stack {
  constructor() {
    this.items = [];
  }

  length = ()=> {
    return this.items.length;
  }

  push = (item)=> {
    this.items.push(item);
  }

  pop = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peekLast = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  peekFirst = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty = ()=> {
    return this.items.length === 0;
  }

  print = ()=> {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.pop());
console.log(stack.peekLast());
console.log(stack.peekFirst());
console.log(stack.isEmpty());
console.log(stack.length());

// Implement a queue using an object - isFull, isEmpty, Enqueue, dequeue, size, print

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isFull = ()=> {
    return Object.keys(this.items).length === this.rear;
  }

  isEmpty = ()=> {
    return this.front === this.rear;
  }

  size = ()=> {
    return Object.keys(this.items).length;
  }

  print = ()=> {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isFull());
console.log(queue.isEmpty());
console.log(queue.size());
queue.print();
