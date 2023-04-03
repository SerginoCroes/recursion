function fibs(n = 0) {
    let arr = [0,1];
    if (n <= 0) return 'enter value above 0';
    if (n === 1) return [0];
    if (n === 2) return arr;
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

function fibsRec(n = 0) {
    if (n <= 0) return 'enter value above 0';
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
}