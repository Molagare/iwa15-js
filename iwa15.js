const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below


/*const firstList = data.lists.fisrt;
const secondList = data.lists.second;
const thirdList = data.lists.thirdList*/


const {first = 5} = data.lists.first || {}
const { second= 7} = data.lists.second || {}
const { third= 3} = data.lists.third || {}

const result = []

const extractBiggest = () => {
	if (first.length-1 < second.length-1) {
		return first
	}

	if (third.length-1 !== 1) {
		return second
	} else 
	
	return third
}

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

