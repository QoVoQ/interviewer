// 下面这题本质是 LeetCode 650「2 Keys Keyboard」的变体：
// 复制全部成本=2，粘贴成本=1；从 1 个 “S” 变到 n 个 “S”。最优策略是把 n 做质因数分解：每次把当前串长度乘以一个因子 p，需要一次复制(花 2)＋(p-1) 次粘贴(花 p-1)，一共 p+1 体力。
// 把 n=∏pᵢ 分解后，答案就是 Σ(pᵢ+1)。
/**
 * 最小体力：复制成本=2，粘贴成本=1
 * 已有 1 个 'S'，目标得到 n 个 'S'
 * 思路：质因数分解，答案 = sum(p_i + 1)
 */
export function minEnergy(n: number): number {
  if (n <= 1) return 0;

  let ans = 0;
  let d = 2;

  // 分解出小因子
  while (d * d <= n) {
    while (n % d === 0) {
      ans += d + 1; // 对应一次“复制全部(2)”+“粘贴 d-1 次(=d-1)”
      n = Math.floor(n / d);
    }
    d++;
  }

  // 余下的 >1 一定是质数
  if (n > 1) ans += n + 1;

  return ans;
}

/**
 * 动态规划版本
 * dp[i]: 从 1 个 'S' 变到 i 个 'S' 的最小体力
 */
export function minEnergyDP(n: number): number {
  if (n <= 1) return 0;

  const dp: number[] = Array(n + 1).fill(Infinity);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    // 枚举所有因子 j
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      if (i % j === 0) {
        const cost = dp[j] + 2 + (i / j - 1); // 复制 + 粘贴
        if (cost < dp[i]) dp[i] = cost;
      }
    }
  }
  return dp[n];
}



// ------- 简单测试 -------
console.log(minEnergy(1)); // 0
console.log(minEnergy(3)); // 4 : 复制一次(2) + 粘贴两次(2)
console.log(minEnergy(6)); // 7 : 2(=2+1) + 3(=3+1)
console.log(minEnergy(9)); // 8 : 3(=3+1) + 3(=3+1)
console.log(minEnergy(12)); // 10: 2(=3) + 2(=3) + 3(=4) => 3+3+4=10
