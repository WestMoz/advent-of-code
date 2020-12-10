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
  console.log(input)
  let column = 0
  for (let row = 1; row < input.length; row += rowChange) {
    column += columnChange
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

// checkRoute()
checkRoute2(2, 1)
console.log(treeCount)

//RIGHT 1 DOWN 1: 93
//RIGHT 3 DOWN 1: 164
//RIGHT 5 DOWN 1: 82
//RIGHT 7 DOWN 1: 91
//RIGHT 1 DOWN 2: 50
console.log(93 * 164 * 82 * 91 * 50)
