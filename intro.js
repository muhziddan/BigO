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

const boxes1 = [1,2,3,4,5]
const boxes2 = [11,22,33,44,55]

function compressBoxTwice(boxes1, boxes2) {
    boxes1.forEach(function(boxes1) {
        console.log(boxes1)
    });

    boxes2.forEach(function(boxes2) {
        console.log(boxes2)
    });
} // O (x + y) -> different terms of input will make the big O using different term

compressBoxTwice(boxes1, boxes2)

// DIVIDER  DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER DIVIDER

