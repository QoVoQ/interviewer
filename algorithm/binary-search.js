// binary search
// https://www.youtube.com/watch?v=JuDAqNyTG4g&t=122s
var binarySearch = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
