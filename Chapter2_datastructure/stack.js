class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
  }

  top() {
    return this.top.data;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.top === null) {
      console.log("Stack underflow!!");
      return false;
    }

    const popNode = this.top;
    this.top = popNode.next;
    this.length--;
    return popNode.data;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.top = newNode;
      this.length++;
      return newNode.data;
    }

    const nextNode = this.top;
    newNode.next = nextNode;
    this.top = newNode;
    this.length++;

    return newNode.data;
  }
}

function init() {
  const stack = new Stack();

  for (let i = 1; i < 13; i = i + 2) {
    console.log(stack.push(i));
  }

  for (let i = 1; i < 13; i = i + 2) {
    console.log(stack.pop());
  }
}

init();
