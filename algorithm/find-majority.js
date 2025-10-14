// 方法findMajority在一个实数数组中，查找是否有某个元素的数量超过数组长度的一半，如果有，将其打印出来，否则输出undefined。如：

function findMajority(arr) {
  if (arr.length === 0) {
      console.log('undefined');
      return;
  }

  let candidate = null;
  let count = 0;

  // 第一遍遍历：找出候选多数元素
  for (let num of arr) {
      if (count === 0) {
          candidate = num;
          count = 1;
      } else if (num === candidate) {
          count++;
      } else {
          count--;
      }
  }

  // 第二遍遍历：验证候选元素是否真的是多数元素
  count = 0;
  for (let num of arr) {
      if (num === candidate) {
          count++;
      }
  }

  if (count > arr.length / 2) {
      console.log(candidate);
  } else {
      console.log('undefined');
  }
}

// 测试
console.log("测试1:");
findMajority([1, 2, 3, 2, 2, 2, 5, 4, 2]); // 应该输出 2

console.log("\n测试2:");
findMajority([1, 2, 3, 4, 5]); // 应该输出 undefined

console.log("\n测试3:");
findMajority([3, 3, 4, 2, 4, 4, 2, 4, 4]); // 应该输出 4

console.log("\n测试4:");
findMajority([]); // 应该输出 undefined

console.log("\n测试5:");
findMajority([1, 1, 1, 2, 2]); // 应该输出 1

// Boyer-Moore 投票算法：

// 时间复杂度：O(n)

// 空间复杂度：O(1)

// 最优选择，适合大数据量


const cases = [
    { weights: [1, 2, 3, 2, 2, 2, 5, 4, 2], expected: 2 },
    { weights: [1, 2, 3, 4, 5],  expected: undefined },
    { weights: [3, 3, 4, 2, 4, 4, 2, 4, 4],  expected: 4 },
    { weights: [],  expected: undefined },
    { weights: [1, 1, 2, 2],  expected: undefined },
    ];


    cases.forEach((ca, idx) => {
    const result = findMajority(ca.weights);


    if (result === ca.expected) {
    console.log(`case ${idx} passed`);
    } else {
    console.log(`case ${idx} failed, result: ${result}, expected: ${ca.expected}`);
    }
    });
