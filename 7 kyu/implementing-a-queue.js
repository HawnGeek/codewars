// http://www.codewars.com/kata/implementing-a-queue

class Queue {
  constructor() {
    this.a = [];
  }
  
  enqueue(i) {
    this.a.push(i);
  }
  
  dequeue() {
    return this.a.shift();
  }
  
  size() {
    return this.a.length;
  }
}