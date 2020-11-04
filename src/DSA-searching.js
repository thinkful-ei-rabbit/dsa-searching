//const bst1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
let bst22 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
// let bst3 = console.log(sort(bst2)

class Bst {
    constructor (key= null, value = null, parent= null) {
        this.key = key
        this.left = null
        this.right = null
        this.value = value
        this.parent = parent
    }
}

export function indexOf(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count ++;
        if (array[i] == value) {
            return `${value} was found in ${count} search`;
        }
    }
    return 'not found';
};

//console.log(indexOf(bst1, 8));

export function binarySearch(array, value, start, end, count = 1) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return  `item not found, after ${count} search`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    // console.log("s",start, "e",end, 'c',count);
    if (item == value) {
        return `${item} was found in ${count} search`;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, count + 1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, count + 1);
    }
}


//console.log(binarySearch(bst1, 8));

//2 a
// export function sort(inputArr) {
// const len = inputArr.length;
// for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//         if (inputArr[j] > inputArr[j + 1]) {
//             let tmp = inputArr[j];
//             inputArr[j] = inputArr[j + 1];
//             inputArr[j + 1] = tmp;
//         }
//     }
// }
// return inputArr;
// };
