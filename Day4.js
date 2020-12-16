const fs = require("fs")
const text = fs.readFileSync("./Day4Input.txt").toString("utf-8")
const input = text.split("\n")

const testInput = [
  "eyr:1972 cid:100",
  "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926",
  "",
  "iyr:2019",
  "hcl:#602927 eyr:1967 hgt:170cm",
  "ecl:grn pid:012533040 byr:1946",
  "",
  "hcl:dab227 iyr:2012",
  "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277",
  "",
  "hgt:59cm ecl:zzz",
  "eyr:2038 hcl:74454a iyr:2023",
  "pid:3556412378 byr:2007",
]

const validInput = [
  "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980",
  "hcl:#623a2f",
  "",
  "eyr:2029 ecl:blu cid:129 byr:1989",
  "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm",
  "",
  "hcl:#888785",
  "hgt:164cm byr:2001 iyr:2015 cid:88",
  "pid:545766238 ecl:hzl",
  "eyr:2022",
  "",
  "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719",
]

// console.log(input)
const required = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"]
let result = 0

// function validatePassport(passport) {
//   console.log("PASSPORT: ", passport)
//   let valid = true
//   const arr = passport.split(" ")
//   const fields = arr.map((el) => el.substr(0, el.indexOf(":")))
//   console.log("FIELDS: ", fields)
//   required.forEach((el) => {
//     if (fields.indexOf(el) === -1) valid = false
//   })
//   if (valid) result++
// }

function validatePassport(passport) {
  console.log("PASSPORT: ", passport)
  let valid = true
  const arr = passport.split(" ")
  const fields = arr.map((el) => el.substr(0, el.indexOf(":")))
  //   console.log("FIELDS: ", fields)
  required.forEach((el) => {
    if (fields.indexOf(el) === -1) valid = false
  })
  if (valid) {
    if (checkFields(arr)) result++
  }
}

function checkFields(arr) {
  let valid = true
  arr.forEach((field) => {
    if (field != "") {
      const values = field.split(":")
      if (!validateField(values)) {
        valid = false
      }
    }
  })
  return valid
}

function validateField(values) {
  if (values[0] === "byr") {
    if (values[1].replace(/\D/g, "").length === 4) {
      if (values[1] >= 1920 && values[1] <= 2002) return true
      else return false
    }
  } else if (values[0] === "iyr") {
    if (values[1].replace(/\D/g, "").length === 4) {
      if (values[1] >= 2010 && values[1] <= 2020) return true
      else return false
    }
  } else if (values[0] === "eyr") {
    if (values[1].replace(/\D/g, "").length === 4) {
      if (values[1] >= 2020 && values[1] <= 2030) return true
      else return false
    }
  } else if (values[0] === "hgt") {
    if (values[1].indexOf("in") !== -1 || values[1].indexOf("cm") !== -1) {
      const height = values[1].replace(/\D/g, "")
      console.log("height: ", height)
      if (values[1].indexOf("cm") != -1) {
        if (height >= 150 && height <= 193) return true
        else return false
      } else {
        if (height >= 59 && height <= 76) return true
        else return false
      }
    } else {
      return false
    }
  } else if (values[0] === "hcl") {
    if (values[1].charAt(0) === "#") {
      const nums = values[1].match(/\d/g) ? values[1].match(/\d/g).join("") : ""
      const chars = +values[1].match(/[a-f]/g)
        ? values[1].match(/[a-f]/g).join("")
        : ""
      const final = nums + chars

      if (final.length === 6) return true
      else return false
    }
  } else if (values[0] === "ecl") {
    const color = values[1]
    const validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

    if (validColors.includes(color)) {
      return true
    } else {
      return false
    }
  } else if (values[0] === "pid") {
    if (values[1].replace("/D/g", "").length === 9) return true
    else return false
  } else if (values[0] === "cid") {
    return true
  } else {
    return true
  }
}

function checkPassports(input) {
  let passport = ""
  input.forEach((line) => {
    if (line != "") {
      passport += " " + line
    } else {
      validatePassport(passport, result)
      passport = ""
    }
  })
}

checkPassports(validInput)
console.log("RESULT: ", result)
console.log(input)
