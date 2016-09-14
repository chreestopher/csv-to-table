# csv-to-table
A simple module for converting CSV files (or arrays of JSON objects) into string of HTML table

This module exports two functions:

    csvToTable:     Converts a CSV file's rows into a div with specified Id, containing an HTML table of the rows contained in the file, as an HTML string
                    Accepts the path to a csv file and optionally a string to use as the id for the div containing the created table.
                    Returns a promise that resolves to the string html table contained in a div with either the default "CSVtoTable" or the string passed as the second parameter as the Id of the div.

    objectsToTable: converts an array of JSON objects into a div with specified Id, containing an HTML table of the objects contained in the array, as an HTML string
                    Accepts an Object, or an array of Objects, and optionally a string to use as id for the div containing the created table.
                    Returns the string html table contained in a div with either the default "CSVtoTable" or the string passed in as the second parameter as the Id of the div. 

                    
Repository Includes:
        
    basic flow types for autocompletion in IDEs,
    tests for mocha, 
    a test csv file
    
To do:
    
    add method to paginate the resulting table and return multiple tables
    add ability to handle styling more thoroughly during table creation