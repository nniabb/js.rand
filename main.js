// დავალება 1
//const input = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
//const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function newarray(input) {
    return [].concat.apply([], input.map(item => Array.isArray(item) ? newarray(item) : item))
}

const input = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
const output = newarray(input)
console.log(output)


//const input1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10, 11, 12];
//const result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function random(input) {
    let res = []
    function rand(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                rand(arr[i])
            } else {
                res.push(arr[i])
            }
        }
    }
    rand(input)
    return res
}

const input1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10, 11, 12]
const result = random(input1)
console.log(result)
  