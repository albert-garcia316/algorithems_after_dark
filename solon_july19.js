// 7/29/2019 Node Swap - return head of SLL and swap values of every two nodes 1-2-3-4 --> 2-1-4-3

class SLL {
    constructor(){
        this.head = null;
    }

    addNode(node){
        if(this.head == null){
            this.head = node;
        }
        else{
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = node;
        }
    }

    swapTwo(){
        var prev = this.head;
        var runner = this.head.next;
        var holder = prev;
        while(runner !== null) {
            if(prev !== holder){
                holder.next = runner;
            }
            if(prev === this.head){
                this.head = runner;
            }
            if(runner.next){
                prev.next = runner.next;
                runner.next = prev;
            } else {
                prev.next = null;
                runner.next = prev;
            }
            holder = prev;
            prev = prev.next;
            if(!prev || !prev.next){
                break;
            };
            runner = prev.next;
        }
    }

    printSLL(){
        var runner = this.head;
        while(runner != null){
            console.log(runner.value);
            runner = runner.next
        }
    }
}

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

sll = new SLL();
for(var i = 1; i < 5; i++){
    node = new Node(i);
    sll.addNode(node);
}
sll.swapTwo();
sll.printSLL();

// Hard coded - while loop was breaking, needs more work!