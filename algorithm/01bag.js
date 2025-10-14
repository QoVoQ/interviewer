// 01bag problem
// 给定一组物品，每种物品都有自己的重量（weights） 和价值（values）。你有一个最大承重为 capacity 的背包。

// 问：在不超出背包承重的前提下，选择哪些物品装入背包，使得背包中物品的总价值最大？
/**
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} capacity
 * @returns {number}
 */
function findMaxValue(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}
// const weights = [1, 2, 3];

// const values = [6, 10, 12];

// const capacity = 4;



// console.log("=== 测试用例 1 ===");

// console.log(findMaxValue(weights, values, 4)); //18



// const weights = [3, 4, 5, 8];

// const values = [1, 6, 4, 7];

// const capacity = 8;



// console.log("=== 测试用例 2 ===");

// console.log(findMaxValue(weights, values, 8)); //7



// console.log("=== 测试用例 3 ===");

// const weights = [5, 6, 7];

// const values = [10, 20, 30];

// const capacity = 4; // 0


// const cases = [
//     { weights: [1, 2, 3], values: [6, 10, 12], capacity: 4, expected: 18 },
//     { weights: [3, 4, 5, 8], values: [1, 6, 4, 7], capacity: 8, expected: 7 },
//     { weights: [5, 6, 7], values: [10, 20, 30], capacity: 4, expected: 0 },
//     ];


//     cases.forEach((ca, idx) => {
//     const result = findMaxValue(ca.weights, ca.values, ca.capacity);


//     if (result === ca.expected) {
//     console.log(`case ${idx} passed`);
//     } else {
//     console.log(`case ${idx} failed, result: ${result}, expected: ${ca.expected}`);
//     }
//     });
