// DSA Test

// Implement a stack using an array - length, push, pop, peekLast, peekFirst, isEmpty, print

class Stack {
  constructor() {
    this.items = [];
  }

  length = ()=> {
    return this.items.length;
  };
  console.log(stack.length());

  push = ()=> {
    this.items.push();
  };

  pop = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  };
  console.log(stack.pop());

  peekLast = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  };
  console.log(stack.peekLast());

  peekFirst = ()=> {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  };
  console.log(stack.peekFirst());

  isEmpty = ()=> {
    return this.items.length === 0;
  };
  console.log(stack.isEmpty());

  print = ()=> {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();

// Implement a queue using an object - isFull, isEmpty, Enqueue, dequeue, size, print

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isFull = ()=> {
    return Object.keys(this.items).length === this.rear;
  };
  console.log(queue.isFull());

  isEmpty = ()=> {
    return this.front === this.rear;
  };
  console.log(queue.isEmpty());

  size = ()=> {
    return Object.keys(this.items).length;
  };
  console.log(queue.size());

  print = ()=> {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.print();
