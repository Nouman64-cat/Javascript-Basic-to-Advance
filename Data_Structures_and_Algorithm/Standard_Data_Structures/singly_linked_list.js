class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
        console.log(`${this.head.data} added to the head. Size of linked list = ${this.size}`);
    }

    insertLast(data) {
        let node = new Node(data);
        if (this.size === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        console.log(`${node.data} added to the last. Size of linked list = ${this.size}`);
    }

    traverse() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

//javascript does not direct memory access, so we cannot print memory addresses
//time complexity of singly linked list is O(n)

const main = () => {
    let s = new SinglyLinkedList();
    s.insertFirst(10);
    s.insertLast(20);
    s.insertLast(30);
    s.traverse();
}

main();
