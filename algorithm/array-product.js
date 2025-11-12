/*
You are given an array of integers. Return a new array where each element is the product of all other elements except itself.
Example: [1, 2, 3, 4] → [24, 12, 8, 6]
Constraint: Do not use division. O(n) time preferred.
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */

function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products and combine
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}



const testCases = [
  { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
  { input: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
  { input: [2, 3, 4, 5], expected: [60, 40, 30, 24] },
  { input: [1, -1, 1, -1], expected: [1, -1, 1, -1] },
  { input: [10, 0, 5], expected: [0, 50, 0] }
];

// 运行测试
testCases.forEach(({ input, expected }, index) => {
  const result = productExceptSelf(input);
  console.log(`Test ${index + 1}: ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS' : 'FAIL'}`);
  if (JSON.stringify(result) !== JSON.stringify(expected)) {
      console.log(`  Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
  }
});
