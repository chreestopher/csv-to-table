/**
 * Created by chris on 8/17/2016.
 */
var csv2json = require("csv-to-json");
var path = require("path");
var fs = require("fs");

/**
 * Makes HTML Table from array of Objects.
 * @param {object[] | object} data - array of objects.
 * @param {string} [id] - Id to use for div that contains table, if null, use CSVtoTable as default.
 * @return {string} string of HTML table representation of data.
 */
function objectsToTable(data, id){
    if (!id) {
        id = "CSVtoTable";
    }
    if(!(data.length && Object.prototype.toString.call( data ) === '[object Array]' )){
        data = [ data ];
    }
    var columns = Object.keys(data[0]);
    var tableStart = `<div id="${id}">\n`;
    tableStart += `\t<table>\n`;
    tableStart += `\t\t<tr>\n`;
    for (var i = 0; i < columns.length; i++) {
        tableStart += `\t\t\t<th>${columns[i]}</th>\n`;
    }
    tableStart += `\t\t</tr>\n`;
    for (i = 0; i < data.length; i++) {
        tableStart += `\t\t<tr>\n`;
        for (var j = 0; j < columns.length; j++) {
            tableStart += `\t\t\t<td>${data[i][columns[j]]}</td>\n`;
        }
        tableStart += `\t\t</tr>\n`;
    }
    tableStart += `\t</table>\n`;
    tableStart += `</div>`;
    return tableStart;
}
/**
 * Makes HTML Table from CSV file contents.
 * @param {string} input - Path to CSV file.
 * @param {string} [id] - Id to use for div that contains table, if null, use CSVtoTable as default.
 * @return {Promise} resolves to HTML table string
 */
function csvToTable(input, id) {
    if (!id) {
        id = "CSVtoTable";
    }
    var options = {
        filename: path.resolve(input),
    };
    return new Promise(function (resolve, reject) {
        csv2json.parse(options, function (err, data) {
            if(err){
                return reject(err)
            }
            return resolve(objectsToTable(data, id))
        })
    })
}

module.exports.csvToTable = csvToTable;
module.exports.objectsToTable = objectsToTable;