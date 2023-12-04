const fs = require("fs")
const filePath = "./input.txt"

const magic = (row) => {
    return row
        .replace("zero", "zero0zero")
        .replace("one", "one1one")
        .replace("two", "two2two")
        .replace("three", "three3three")
        .replace("four", "four4four")
        .replace("five", "five5five")
        .replace("six", "six6six")
        .replace("seven", "seven7seven")
        .replace("eight", "eight8eight")
        .replace("nine", "nine9nine")
}

fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
        console.error(`Error reading file, error: ${error}`)
        return
    }

    const rows = data.split("\n")

    const total = rows.reduce((sum, row) => {
        const magicRow = magic(row.toLowerCase())
        const noletters = magicRow.replace(/[a-zA-Z]/g, "").trim()
        let numbers = ""

        if (noletters.length > 1) {
            numbers = noletters.charAt(0) + "" + noletters.charAt(noletters.length - 1)
        } else {
            numbers = noletters.charAt(0) + "" + noletters.charAt(0)
        }

        return sum + Number(numbers)
    }, 0)

    console.log(total)
})
