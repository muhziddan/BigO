const bestFish = ['Dory', 'Nemo']
const allFish = ['Dory', 'bruce', 'marlin', 'gill', 'bloat', 'qsuirt', 'dadrla', 'hank', 'Nemo']
const manyFish = new Array(100000).fill('Nemo')

function findNemo(array) { // O(N) or linear time
    // let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Nemo') {
            // console.log("Found nemo")
        }
    }
    // let t1 = performance.now()
    // console.log("time to find nemo: " + (t1 - t0) + ' miliseconds')
}

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
boxMultiplier(1000)
logFirstThreeBoxes(boxes)