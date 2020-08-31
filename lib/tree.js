class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(log n)
    add(key, value) {
        let newNode = new TreeNode(key, value);

        if (this.root === null) {
            this.root = newNode;   
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(log n)
    find(key) {
        if (this.root === null) {
            return null;
        }
      
        return this.findNode(key, this.root);
    }

    findNode(key, currentNode) {
        if (currentNode === null) {
          return false;
        }
    
        if (key === currentNode.key) {
          return currentNode.value;
        }
    
        if (key < currentNode.key) {
          return this.findNode(key, currentNode.left);
        } else {
          return this.findNode(key, currentNode.right);
        }
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    inorder() {
        if (this.root === null) {
            return [];
        }
        const array = [];
        return this.inOrderHelper(this.root, array);
    }

    inOrderHelper(root, array) {
        if (root === null) {
            return;
        }
        this.inOrderHelper(root.left, array);
        array.push({key: root.key, value: root.value});
        this.inOrderHelper(root.right, array);

        return array;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    preorder() {
        if (this.root === null) {
            return [];
        }
        const array = [];
        return this.preOrderHelper(this.root, array);
    }

    preOrderHelper(root, array) {
        if (root === null) {
            return;
        }
        array.push({key: root.key, value: root.value});
        this.preOrderHelper(root.left, array);
        this.preOrderHelper(root.right, array);

        return array;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    postorder() {
        if (this.root === null) {
            return [];
        }
        const array = [];
        return this.postOrderHelper(this.root, array);
    }

    postOrderHelper(root, array) {
        if (root === null) {
            return;
        }
        this.postOrderHelper(root.left, array);
        this.postOrderHelper(root.right, array);
        array.push({key: root.key, value: root.value});

        return array;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    height() {
        return this.findHeight(this.root);
    }

    findHeight(root) {
        if (root === null) {
          return 0;
        }
    
        let leftHeight = this.findHeight(root.left);
        let rightHeight = this.findHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }

    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;