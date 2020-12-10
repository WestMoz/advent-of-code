const fs = require("fs")
const text = fs.readFileSync("./Day2Input.txt").toString("utf-8")
const input = text.split("\n")

let count = 0
const checkPasswords = () => {
  input.forEach((element) => {
    const item = element.split(" ")
    // console.log(item)
    if (item != "") {
      const range = item[0].split("-")
      const letter = item[1].charAt(0)
      const password = item[2]

      const charsMatching = password.split("").filter((char) => char === letter)
        .length
      console.log(charsMatching)
      if (charsMatching >= range[0] && charsMatching <= range[1]) {
        count++
      }
    }
  })
}

const newCheckPasswords = () => {
  input.forEach((element) => {
    const item = element.split(" ")
    // console.log(item)
    if (item != "") {
      const range = item[0].split("-")
      const letter = item[1].charAt(0)
      const password = item[2]

      if (
        password[range[0] - 1] === letter &&
        password[range[1] - 1] !== letter
      ) {
        count++
      } else if (
        password[range[0] - 1] !== letter &&
        password[range[1] - 1] === letter
      ) {
        count++
      }
    }
  })
}

// console.log(input)
// checkPasswords()
newCheckPasswords()
console.log("Matching passwords: ", count)
