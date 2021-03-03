const path = require('path')

const csvToJson = async function (excelName) {
    const csvFilePath20 = path.join(__dirname, "..", `/ExelData/${excelName + "20"}.csv`)
    const csvFilePath21 = path.join(__dirname, "..", `/ExelData/${excelName + "21"}.csv`)
    const csv = require('csvtojson')
    let data = await csv().fromFile(csvFilePath20)
    let data2 = await csv().fromFile(csvFilePath21)
    for (game of data2) {
        data.push(game)
    }
    data = data.reverse()
    return data
}


module.exports = csvToJson