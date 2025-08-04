// check whether the brackets in a string are balanced
function isBalanced(str) {
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
