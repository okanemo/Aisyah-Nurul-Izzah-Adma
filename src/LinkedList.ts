import OrderBy from './OrderBy';

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList extends OrderBy {
  head: Node | null = null;

  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  ascending(): void{
    if (!this.head){
      return;
    }

    let current : Node | null = this.head;  
    let next = null;
    var temp;  
          
    while (current){
      next = current.next;  
      while (next){  
        if(current.data > next.data){  
          temp = current.data;  
          current.data = next.data;  
          next.data = temp;                 
        }
        next = next.next;
      }  
      current = current.next;
    }   
  }
  
  descending(): void{
    if (!this.head){
      return;
    }

    let current : Node | null = this.head;  
    let next = null;
    var temp;  
          
    while (current){
      next = current.next;  
      while (next){  
        if(current.data < next.data){  
          temp = current.data;  
          current.data = next.data;  
          next.data = temp;                 
        }
        next = next.next;
      }  
      current = current.next;
    }   
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let res = [];
    while (node) {
      res.push(node.data);
      node = node.next;
    }

    console.log(res.join(" -> "));
  }
}

export default LinkedList;
