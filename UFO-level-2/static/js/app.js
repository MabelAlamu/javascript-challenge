// From data.js
var ufoData = data;
var ufoColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

// References
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var dateField = d3.select("#datetime");

// Get the value property of the input elements.
// Set text to lowercase as the values in data file are all in lowercase
var selectedDatetime = d3.select("#datetime").property("value");
var selectedCity = d3.select("#city").property("value").toLowerCase();
var selectedState = d3.select("#state").property("value").toLowerCase();
var selectedCountry = d3.select("#country").property("value").toLowerCase();
var selectedShape = d3.select("#shape").property("value").toLowerCase();


// Arrow function that builds the HTML table
    ufoData.forEach(row => {
        ufoRow = tbody.append("tr");
        ufoColumns.forEach(column => ufoRow.append("td").text(row[column]))
    });

// Filter table by user input
button.on("click", function (){
    // Prevents page from refreshing
    d3.event.preventDefault();

    //Remove existing table
    tbody.html("");

    // Gets the user's inputed date
    var userInput = dateField.property("value");
    console.log(userInput);

    // Filter ufoData for observations with matching dates
    var result = ufoData.filter(ufoData => ufoData.datetime === userInput);
    console.log(result);
    
    // Pull data where date matches user input
    result.forEach(row => {
        var resultRow = tbody.append("tr");
        ufoColumns.forEach(column => resultRow.append("td").text(row[column]))
    });
});
