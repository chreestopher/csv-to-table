/**
 * Created by chris on 8/17/2016.
 */
var chai = require('chai');
var tablemaker = require('./index.js');
var expect = chai.expect;

//noinspection JSUnresolvedFunction
describe('CSV To Table', function() {
    //noinspection JSUnresolvedFunction
    it('parse a CSV file and return an html table', function(done){
            tablemaker.csvToTable("./testcsvfile.csv").then(function(data){
            expect(data).to.include("<table>");
            expect(data).to.include("<th>");
            expect(data).to.include("<tr>");
            expect(data).to.include("<td>");
            expect(data).to.include("</table>");
            expect(data).to.include("</th>");
            expect(data).to.include("</tr>");
            expect(data).to.include("</td>");
            done();
        }).catch(function(error){
            done(error);
        })
    });
    //noinspection JSUnresolvedFunction
    it('uses the Id CSVtoTable for the id of the div containing the table by default', function(done){
        tablemaker.csvToTable("./testcsvfile.csv").then(function(data){
            expect(data).to.include('<div id="CSVtoTable">');
            done();
        }).catch(function(error){
            done(error);
        })
    });
    //noinspection JSUnresolvedFunction
    it('uses the passed in Id for the id of the div containing the table, if provided', function(done){
        var myId = "myID";
        tablemaker.csvToTable("./testcsvfile.csv", myId).then(function(data){
            expect(data).to.include(`<div id="${myId}">`);
            done();
        }).catch(function(error){
            done(error);
        })
    });
});
//noinspection JSUnresolvedFunction
describe('Objects To Table', function() {
    var jsonObjects = [
        {
            name: "a name",
            column1: "row 1 column 1",
            column2: "row 1 column 2",
            column3: "row 1 column 3",
        },
        {
            name: "another name",
            column1: "row 2 column 1",
            column2: "row 2 column 2",
            column3: "row 2 column 3",
        },
        {
            name: "yet another name",
            column1: "row 3 column 1",
            column2: "row 3 column 2",
            column3: "row 3 column 3",
        },
    ];
    var singleObject = {
        name: "a name",
        column1: "row 1 column 1",
        column2: "row 1 column 2",
        column3: "row 1 column 3",
    };
    //noinspection JSUnresolvedFunction
    it('converts single json object to an html table', function(done){
        var data = tablemaker.objectsToTable(singleObject);
        expect(data).to.include("<table>");
        expect(data).to.include("<th>");
        expect(data).to.include("<tr>");
        expect(data).to.include("<td>");
        expect(data).to.include("</table>");
        expect(data).to.include("</th>");
        expect(data).to.include("</tr>");
        expect(data).to.include("</td>");
        done();
    });
    //noinspection JSUnresolvedFunction
    it('convert array of json objects to an html table', function(done){
        var data = tablemaker.objectsToTable(jsonObjects);
        expect(data).to.include("<table>");
        expect(data).to.include("<th>");
        expect(data).to.include("<tr>");
        expect(data).to.include("<td>");
        expect(data).to.include("</table>");
        expect(data).to.include("</th>");
        expect(data).to.include("</tr>");
        expect(data).to.include("</td>");
        done();
    });
    //noinspection JSUnresolvedFunction
    it('uses the Id CSVtoTable for the id of the div containing the table by default', function(done){
        var data = tablemaker.objectsToTable(jsonObjects);
        expect(data).to.include('<div id="CSVtoTable">');
        done();
    });
    //noinspection JSUnresolvedFunction
    it('uses the passed in Id for the id of the div containing the table, if provided', function(done){
        var myId = "myID";
        var data = tablemaker.objectsToTable(jsonObjects, myId);
        expect(data).to.include(`<div id="${myId}">`);
        done();
    });
});