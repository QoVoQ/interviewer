// 实现一个可以对对象深度比较的函数

function deepEqual(obj1: any, obj2: any): boolean {
  // 处理基本数据类型的比较
  if (obj1 === obj2) {
      return true;
  }

  // 处理null和undefined
  if (obj1 == null || obj2 == null) {
      return obj1 === obj2;
  }

  // 处理不同类型的对象
  if (typeof obj1 !== typeof obj2) {
      return false;
  }

  // 处理Date对象
  if (obj1 instanceof Date && obj2 instanceof Date) {
      return obj1.getTime() === obj2.getTime();
  }

  // 处理Map对象
  if (obj1 instanceof Map && obj2 instanceof Map) {
      if (obj1.size !== obj2.size) return false;
      for (const [key, value] of obj1) {
          if (!obj2.has(key) || !deepEqual(value, obj2.get(key))) {
              return false;
          }
      }
      return true;
  }

  // 处理Set对象
  if (obj1 instanceof Set && obj2 instanceof Set) {
      if (obj1.size !== obj2.size) return false;
      for (const value of obj1) {
          if (!obj2.has(value)) {
              return false;
          }
      }
      return true;
  }

  // 处理数组
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
          if (!deepEqual(obj1[i], obj2[i])) {
              return false;
          }
      }
      return true;
  }

  // 处理普通对象
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      // 比较键的数量
      if (keys1.length !== keys2.length) {
          return false;
      }

      // 比较每个键的值
      for (const key of keys1) {
          if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
              return false;
          }
      }

      return true;
  }

  // 其他情况（如函数、Symbol等）
  return obj1 === obj2;
}

// 测试各种场景
const testCases = [
  // 基本数据类型
  [42, 42, true],
  ["hello", "hello", true],
  [true, true, true],
  [null, null, true],
  [undefined, undefined, true],
  [42, "42", false],

  // 数组
  [[1, 2, 3], [1, 2, 3], true],
  [[1, 2, 3], [1, 2, 4], false],
  [[1, [2, 3]], [1, [2, 3]], true],

  // 对象
  [{ a: 1, b: 2 }, { a: 1, b: 2 }, true],
  [{ a: 1, b: 2 }, { b: 2, a: 1 }, true], // 键顺序不影响
  [{ a: 1, b: 2 }, { a: 1, b: 3 }, false],

  // 特殊对象
  [new Date(2023, 0, 1), new Date(2023, 0, 1), true],
  [new Map([['a', 1]]), new Map([['a', 1]]), true],
  [new Set([1, 2, 3]), new Set([1, 2, 3]), true],

  // 循环引用
//   (() => {
//       const obj1: any = { a: 1 };
//       obj1.self = obj1;
//       const obj2: any = { a: 1 };
//       obj2.self = obj2;
//       return [obj1, obj2, true];
//   })(),
];

// 运行测试
testCases.forEach(([obj1, obj2, expected], index) => {
  const result = deepEqual(obj1, obj2);
  console.log(`Test ${index + 1}: ${result === expected ? 'PASS' : 'FAIL'}`);
  if (result !== expected) {
      console.log(`  Expected: ${expected}, Got: ${result}`);
  }
});
