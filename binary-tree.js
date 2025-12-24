class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  printVisual(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    if (node.right) {
      this.printVisual(node.right, prefix + (isLeft ? "| " : " "), false);
    }

    console.log(prefix + (isLeft ? "└──" : "┌── ") + node.value);

    if (node.left) {
      this.printVisual(node.left, prefix + (isLeft ? "   " : "|  "), true);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(11);
tree.insert(4);

tree.printVisual();
