let arr = [];
for (let i = 99; i >= 0; i--) {
    arr.push(i);
}

function randomize() {
    for (let i = arr.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        let swapsave = arr[i];
        arr[i] = arr[randIndex];
        arr[randIndex] = swapsave;
    }
};

function mergeSort([...arr]) {
    if (arr.length === 1) return arr;
    const half = Math.floor(arr.length / 2);
    const left = arr.splice(0, half);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];
    const length = left.length + right.length;
    for (let i = 0; i < length; i++) {
        if (left.length < 1) {
            arr = [...arr, ...right];
            break;
        }
        if (right.length < 1) {
            arr = [...arr, ...left];
            break;
        }
        arr.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return arr;
}