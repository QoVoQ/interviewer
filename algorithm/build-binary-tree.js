
// 构建一棵二叉树
function TreeNode(val, left, right) {
this.val = (val === undefined ? 0 : val);
this.left = (left === undefined ? null : left);
this.right = (right === undefined ? null : right);
}

function buildTreeFromArray(arr, index = 0) {
  if(!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[index]);
  root.left = buildTreeFromArray(arr, 2 * index + 1);
  root.right = buildTreeFromArray(arr, 2 * index + 2);
  return root;
}

// 示例用法
const root = buildTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log(root);


// left child index: 2 * i + 1
// right child index: 2 * i + 2

// use queue to build tree from array
// 1. Create a queue and add the root node.
// 2. For each node, if the left child index is within bounds, create the left child and add it to the queue.
// 3. If the right child index is within bounds, create the right child and add it to the queue.
// 4. Repeat until all elements in the array are processed.
function buildTreeFromArray(arr, index = 0) {
  if(!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[index]);
  const queue = [root];
  let i = 1;
  while(i < arr.length) {
    const node = queue.shift();
    if(arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if(i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
