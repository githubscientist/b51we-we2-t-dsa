/*
    Arrays Vs LinkedList

    - Arrays are static in size, LinkedList are dynamic in size
    - Arrays are stored in contiguous memory, LinkedList are stored in non-contiguous memory
    - Arrays are faster in accessing elements, LinkedList are slower in accessing elements
    - Arrays are slower in adding and removing elements, LinkedList are faster in adding and removing elements
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        // create an empty array
        let nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertAtTail(data) {
        // create a new node with data
        let newNode = new Node(data);

        if (this.head === null) {
            // newNode is the head node
            this.head = newNode;
        } else {
            // linked list is not empty
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }
}

let list = new LinkedList();

list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(7);

list.insertAtHead(2);
list.insertAtHead(1);

console.log(list.toArray());

/*
    node1 = Node {
        data: 3,
        next: Node {
            data: 5,
            next: null
        }
    }

    node2: Node {
        data: 5,
        next: null
    }
*/