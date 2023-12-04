const fs = require("fs")
const filePath = "./input.txt"

fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
        console.error(`Error reading file, error: ${error}`)
        return
    }

    const rows = data.split("\n")

    const total = rows.reduce((sum, row) => {
        const noletters = row.replace(/[a-zA-Z]/g, "").trim()
        let numbers = ""

        if (noletters.length > 1) {
            numbers = noletters.charAt(0) + "" + noletters.charAt(noletters.length - 1)
        } else {
            numbers = noletters + "" + noletters
        }

        return sum + Number(numbers)
    }, 0)


    console.log(total)
})
