// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？



// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶


// 提示：

// 1 <= n <= 80

// 解法1
var cache = {};
var climbStairs = function(n) {
    if(n <= 2) return n;
    if(cache[n]) return cache[n];

    const res = climbStairs(n-1) + climbStairs(n-2);

    cache[n] = res;

    return res
};

// 解法2
var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};


// 考点，分析递归过程，不使用缓存的情况下会爆盏/超时
