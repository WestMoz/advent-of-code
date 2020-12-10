const fs = require("fs")
const text = fs.readFileSync("./Day3Input.txt").toString("utf-8")
const input = text.split("\n")

let treeCount = 0
const checkRoute = () => {
  console.log(input)
  let column = 0
  for (let row = 1; row < input.length; row++) {
    column += 3
    console.log("POSTION: ", row, column)
    if (column > input[row].length - 1) {
      console.log("before column change: ", column, input[row].length)
      column = column - input[row].length
      console.log("entered column if", column)
    }
    const position = [row, column]
    console.log("CURRENT LOCATION: ", input[row].charAt(column))
    if (input[row].charAt(column) === "#") {
      treeCount++
    }
  }
}

const checkRoute2 = (rowChange, columnChange) => {
  let treeCount = 0
  // console.log(input)
  let column = 0
  for (let row = 0; row < input.length; row += rowChange) {
    if (row != 0) {
      column += columnChange
    }

    // console.log("POSTION: ", row, column)
    if (column > input[row].length - 1) {
      // console.log("before column change: ", column, input[row].length)
      column = column - input[row].length
      // console.log("entered column if", column)
    }
    const position = [row, column]
    console.log("POSTION: ", row, column)
    console.log("CURRENT LOCATION: ", input[row].charAt(column))
    if (input[row].charAt(column) === "#") {
      treeCount++
    }
  }
  return treeCount
}

// checkRoute()
// checkRoute2(2, 1)
// console.log(treeCount)

// console.log(
//   "FINAL RESULT: ",
//   checkRoute2(1, 1) *
//     checkRoute2(1, 3) *
//     checkRoute2(1, 5) *
//     checkRoute2(1, 7) *
//     checkRoute2(2, 1)
// )

const result =
  checkRoute2(1, 1) *
  checkRoute2(1, 3) *
  checkRoute2(1, 5) *
  checkRoute2(1, 7) *
  checkRoute2(2, 1)

console.log("*******", result)

// console.log("RESULT", checkRoute2(2, 1))
// console.log("RESULT", checkRoute2(1, 3))
// console.log("RESULT", checkRoute2(1, 5))
// console.log("RESULT", checkRoute2(1, 7))
// console.log("RESULT", checkRoute2(2, 1))

//RIGHT 1 DOWN 1: 93
//RIGHT 3 DOWN 1: 164
//RIGHT 5 DOWN 1: 82
//RIGHT 7 DOWN 1: 91
//RIGHT 1 DOWN 2: 50
// console.log(93 * 164 * 82 * 91 * 50)
