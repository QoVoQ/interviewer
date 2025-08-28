// 有多种气球，每种气球的分值是固定的，但数量无限。

// 要求凑出总分 target 的方案数（顺序无关）。

// 示例：分值集合 {1,3,6}，目标 8，答案为 4 种。

// 例子中 {1,3,6} 凑 8 的方案数：

// 1+1+1+1+1+1+1+1

// 3+3+1+1

// 6+1+1

// 3+1+1+1+1

/**
 * 计算凑出 target 分数的组合数（顺序无关）
 * @param {number[]} scores 气球分值数组
 * @param {number} target 目标分数
 * @returns {number}
 */
function countCombinations(scores, target) {
  // 初始化dp数组，dp[i]表示凑出总分i的方案数
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // 基础情况：凑出0分的方案数为1（不选任何气球）

  // 遍历每种分值的气球
  for (const coin of scores) {
      // 对于当前分值coin，从coin开始遍历到target
      for (let i = coin; i <= target; i++) {
          dp[i] += dp[i - coin];
      }
  }

  return dp[target];
}


 
// ------- 测试1 -------
const scores = [1, 3, 6];
const target = 8;
console.log(countCombinations(scores, target)); // 4
 
 
// ------- 测试2 -------
const scores = [2, 5, 10];
const target = 15;
console.log(countCombinations(scores, target)); // 3


// ------- 测试3 -------
const scores = [3, 7];
const target = 5;
console.log(countCombinations(scores, target)); // 0
