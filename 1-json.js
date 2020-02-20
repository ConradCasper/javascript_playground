const fs = require('fs')
const log = console.log

// const book = {
//     title: 'Child 44',
//     author: 'Some Guy'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// log(data.title)



const dataBuffer = fs.readFileSync('1-json.json')
// log(dataBuffer)
const dataJSON = dataBuffer.toString()
// log(dataJSON)
const data = JSON.parse(dataJSON)
// log(data)
data.name = "Conrad"
data.age = 28

const newData = JSON.stringify(data)
// log(newData)
fs.writeFileSync('1-json.json', newData)

const newDataBuffer = fs.readFileSync('1-json.json')
// log(newDataBuffer)
const newDataJSON = newDataBuffer.toString()
// log(newDataJSON)
const newNewData = JSON.parse(newDataJSON)
log(newNewData)