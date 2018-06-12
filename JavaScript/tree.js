// 二叉数搜索
// 创建自己的binarySearchTree类。首先，声明它的结构：
// 树使用两个指针，一个指向左侧子节点，一个指向右侧子节点

function BinarySearchTree() {
    var Node = function (key) {  //声明一个Node类来表示书中的每一个节点
        this.key = key;   //键是树相关的术语中对节点的称呼
        this.left = null;  //左孩子
        this.right = null;
    };
    var root = null;   //声明一个变量控制此数据结构的第一个节点，根元素
  
// 向树中插入一个键
 this.insert = function(key) {
     var newNode = new Node(key);   //1.创建用来表示node类型的实例.
    
     if(root==null){  //验证这个插入操作是否为一种特俗情况。我们要插入的节点是不是第一个节点。
         root = newNode;     // 跟节点指向新节点。
     }else {
         insertNode(root,newNode);  //跟节点加载非根节点的其他位置。
     }
};
var insertNode = function(node,newNode){ 
    if(newNode.key<node.key){
        if(node.left==null){
            node.left=newNode;
        }else{
            insertNode(node.left,newNode);
        }
    }else{
        if(node.right==null){
            node.right = newNode;
        }else{
            insertNode(node.right,newNode)
        }
    }
}


// 树的遍历
// 1.中序遍历
this.inOrderTraverser = function(callback) {
    inOrderTraverserNode(root,callback)
}

var inOrderTraverserNode = function(node,callback) {
    if(node!==null) {
        inOrderTraverserNode(node.left,callback);
        callback(node.key);
        inOrderTraverserNode(node.right,callback)
    }
}
//2.先序排序
this.perOrderTraverse = function(callback) {
    perOrderTraverseNode(root,callback);
}

var perOrderTraverseNode = function(node,callback) {
    if(node!==null) {
        callback(node.key);
        perOrderTraverseNode(node.left,callback);
        perOrderTraverseNode(node.right,callback)
    }
}
// 3.后序排序
this.C = function(callback) {
    postOrdeTraverseNode(root,callback)
}
var postOrdeTraverseNode = function(node,callback) {
    if(node!==null){
        postOrdeTraverseNode(node.left,callback);
        postOrdeTraverseNode(node.right,callback);
        callback(node.key);
    }
}

// 树的最小值
this.min = function() {
    return minNode(root);
}
var minNode = function(node) {
    if(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node.key;
    }
    return null;
}

//树的最大值
this.max = function(){
    return maxNode(root);
}
var maxNode = function(node) {
    if(node) {
        while (node && node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    return null;
}


}
var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6)


function printNode(value) {
    console.log(value)
}
tree.perOrderTraverse  (printNode)