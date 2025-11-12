// check whether the brackets in a string are balanced

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

/**
 * @param {string} str
 * @returns {boolean}
 */

function isValid(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of str) {
    if (brackets[char]) {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      // If it's a closing bracket, check if it matches the last opening bracket
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false; // Mismatched or unbalanced brackets
      }
    }
  }

  // If the stack is empty, all brackets were balanced
  return stack.length === 0;
}


输出描述

isValid("()") // true

isValid("()[]{}") // true

isValid("(]") // false

isValid("([)]") // false

isValid("{[]}") // true

isValid("{[]") // false

备注

// 运行以下代码，输出 true, true false, false, false

const arr = ["()", "()[]{}", "(]", "([)]", "{[]"];

arr.forEach(s => console.log(isValid(s)));
