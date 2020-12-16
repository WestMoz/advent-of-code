const fs = require("fs")
const text = fs.readFileSync("./Day5Input.txt").toString("utf-8")
const input = text.split("\r\n")

// console.log(input)
const testInput = ["FBFBBFFRLR"]

function findSeat(seatIds) {
  for (let i = 1; i < seatIds.length; i++) {
    if (seatIds[i] - seatIds[i - 1] != 1) {
      return seatIds[i]
    }
  }
  return "not found"
}

function checkSeats(input) {
  let maxId = 0
  const seatIds = []
  input.forEach((el) => {
    const rowCode = el.slice(0, 7)
    const colCode = el.slice(7, 10)
    const row = getRow(rowCode)
    const col = getCol(colCode)
    const seatId = row * 8 + col
    if (seatId > maxId) maxId = seatId
    seatIds.push(seatId)
  })
  console.log(seatIds.sort((a, b) => a - b))
  return seatIds.sort((a, b) => a - b)
  //   return maxId
}

function getCol(colCode) {
  const codeArr = colCode.split("")
  let left = 0
  let right = 7
  codeArr.forEach((el) => {
    if (el === "L") {
      right = left + Math.floor((right - left) / 2)
    } else {
      left = right - Math.floor((right - left) / 2)
    }
  })
  return left
}

function getRow(rowCode) {
  const codeArr = rowCode.split("")
  let left = 0
  let right = 127
  codeArr.forEach((el) => {
    if (el === "F") {
      right = left + Math.floor((right - left) / 2)
    } else {
      left = right - Math.floor((right - left) / 2)
    }
  })
  return left
}

console.log("RESULT: ", findSeat(checkSeats(input)))
