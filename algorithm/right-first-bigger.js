// 给定一个数组，找到每个元素右侧第一个比它大的数字，没有的话返回-1，最终结果返回一个数组
// 比如： 输入： [2, 1, 2, 4, 3] 输出： [4, 2, 4, -1, -1]

// const input = [2, 1, 2, 4, 3];
// const input = [];
// const input = [1, 2, 3, 4];
// const input = [4, 3, 2, 1];


// force
// O(n^2)

function findFirstBigger(arr) {
    const result = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                result[i] = arr[j]
                break;
            }
        }
    }

    return result;
}

// stack
// O(n)
// idx in stack are in order, from stack top to bottom, from small to big
// every element only push/pop stack once, so complexity is O(n)

function findFirstBiggerStack(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];
    for(let i = 0; i < arr.length; i++) {
        while(stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const topIdx = stack.pop();
            result[topIdx] = arr[i]
        }

        stack.push(i)
    }

    return result;
}