const fs = require("fs")
const text = fs.readFileSync("./Day6Input.txt").toString("utf-8")
const input = text.split("\r\n")

// console.log(input)
const testInput = [
  "abc",
  "",
  "a",
  "b",
  "c",
  "",
  "ab",
  "ac",
  "",
  "a",
  "a",
  "a",
  "a",
  "",
  "b",
]

const yesLetters = ["a", "b", "c", "x", "y", "z"]

function checkAnswers(input) {
  const responses = []
  input.forEach((el) => {
    responses.push(el)
    if ((el = "")) {
      console.log(responses)
      responses = []
    }
  })
}

function sumCounts(responses) {
  responses.forEach((el) => {
    console.log(el)
  })
}

checkAnswers(testInput)
