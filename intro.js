const bestFish = ['Dory', 'Nemo']
const allFish = ['Dory', 'bruce', 'marlin', 'Nemo', 'bloat', 'qsuirt', 'dadrla', 'hank', 'gill']
const manyFish = new Array(100000).fill('Nemo')

function findNemo(array) { // O(N) or linear time
    // let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Nemo') {
            console.log("Found nemo")
            break
        }
    }
    // let t1 = performance.now()
    // console.log("time to find nemo: " + (t1 - t0) + ' miliseconds')
} // O(n) -> even if nemo is in the first index, big O will still consider the worst case, so it will be O(n)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

const boxes = []
function boxMultiplier(count) {
    for (let i = 0; i < count; i++) {
        boxes[i] = i
    }
}

function logFirstThreeBoxes(array) { // O(1) or constant time
    for (let i = 0; i < 3; i++) {
        console.log(array[i])
    }
}

// findNemo(bestFish)
boxMultiplier(10)
// logFirstThreeBoxes(boxes)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

function printFirstItemThenHalfThenSayHi100Times(input) {
    console.log(input[0])

    var middleIndex = Math.floor(input.length / 2)
    var currentIndex = 0

    while (currentIndex < middleIndex) {
        console.log(input[currentIndex])
        currentIndex++
    }

    for (let i = 0; i < 100; i++) {
        console.log('Hi!')
    }
} // O (n/2 + 1) -> O (n) -> constant is removed because it did not have a significant effect

// printFirstItemThenHalfThenSayHi100Times(boxes)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

const boxes1 = [1, 2, 3, 4, 5]
const boxes2 = [6, 7, 8, 9, 10]

function compressBoxTwice(boxes1, boxes2) {
    boxes1.forEach(function (boxes1) {
        console.log(boxes1)
    });

    boxes2.forEach(function (boxes2) {
        console.log(boxes2)
    });
} // O (x + y) -> different terms of input will make the big O using different term

// compressBoxTwice(boxes1, boxes2)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

function logAllPairs(boxes) {
    const pairs = []

    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[i] !== boxes[j]) {
                pairs[0] = boxes[i]
                pairs[1] = boxes[j]
                console.log(pairs)
            }
        }
    }
} // O(n*n) -> O(n^2) -> nested loop will make a multiplication

// logAllPairs(boxes1)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

function sumAllPairs(array) {
    array.forEach(function (array1) {
        array.forEach(function (array2) {
            console.log(array1 + array2)
        });
    });
} // O(n + n^2) -> O(n^2) -> n is a non dominant compared to n^2, so n will be dropped

// sumAllPairs([1, 2, ,3 ,4])

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

function hiN(n) {
    const results = []
    for (let i = 0; i < n.length; i++) {
        results[i] = 'Hi'
    }
    return results
}// space comp O(n), time comp O(n)

// console.log(hiN([1, 2, 3, 4]))

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

//js other type of function syntax

const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'Nemo') {
            console.log('Found nemo')
        }
    });
}

const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'Nemo') {
            console.log('Found nemo')
        }
    };
}

findNemo2(bestFish)
findNemo3(bestFish)
