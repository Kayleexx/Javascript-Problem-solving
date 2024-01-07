function largeElement(arr) {
    if(arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];

    for(let i =1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [ 45, 67, 23, 78, 76, 90, 74, 34, 56];
const largestNo = largeElement(numbers);
console.log(largestNo);