// Assign the data from `data.js` to a descriptive variable
var sightings = data;
var filteredSightings = data;

var tbody = d3.select("tbody");
var table = d3.select("table");

filteredSightings.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  row.append("td").text(sighting.datetime);
  row.append("td").text(sighting.city);
  row.append("td").text(sighting.state);
  row.append("td").text(sighting.country);
  row.append("td").text(sighting.shape);
  row.append("td").text(sighting.durationMinutes);
  row.append("td").text(sighting.comments);
});


// Select the submit button
var datetimeSubmitButton = d3.select("#filterDatetime");
var citySubmitButton = d3.select("#filterCity");
var stateSubmitButton = d3.select("#filterState");
var countrySubmitButton = d3.select("#filterCountry");
var shapeSubmitButton = d3.select("#filterShape");







// Make the datetimeSubmitButton Work
datetimeSubmitButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // delete the current table so we can print the filtered sightings data
  // var tableBody = document.getElementById("tableBody");
  // while (tableBody.hasChildNodes()) {
  // 	tableBody.removeChild(tableBody.lastChild);
  // }
  d3.select("tbody").html("");
  // Select the input value from the input element and get the raw HTML node
  var inputValue = d3.select("#datetimeInput").node().value;
  
  // test the value of 
  console.log(inputValue);
  // console.log(inputElement);

  filteredSightings = sightings.filter(sighting => sighting.datetime === inputValue);

  filteredSightings.forEach(function(sighting) {
  	  console.log(sighting);
  	var row = tbody.append("tr");
  	row.append("td").text(sighting.datetime);
  	row.append("td").text(sighting.city);
  	row.append("td").text(sighting.state);
  	row.append("td").text(sighting.country);
  	row.append("td").text(sighting.shape);
  	row.append("td").text(sighting.durationMinutes);
  	row.append("td").text(sighting.comments); 
  })
});




// Make the citySubmitButton Work
citySubmitButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // delete the current table so we can print the filtered sightings data
  var tableBody = document.getElementById("tableBody");
  while (tableBody.hasChildNodes()) {
  	tableBody.removeChild(tableBody.lastChild);
  }
  
  // Select the input value from the input element and get the raw HTML node
  var inputValue = d3.select("#cityInput").node().value;
  
  // test the value of 
  console.log(inputValue);
  // console.log(inputElement);

  filteredSightings = sightings.filter(sighting => sighting.city === inputValue);

  filteredSightings.forEach(function(sighting) {
  	  console.log(sighting);
  	var row = tbody.append("tr");
  	row.append("td").text(sighting.datetime);
  	row.append("td").text(sighting.city);
  	row.append("td").text(sighting.state);
  	row.append("td").text(sighting.country);
  	row.append("td").text(sighting.shape);
  	row.append("td").text(sighting.durationMinutes);
  	row.append("td").text(sighting.comments); 
  })
});
// Make the stateSubmitButton Work
stateSubmitButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // delete the current table so we can print the filtered sightings data
  var tableBody = document.getElementById("tableBody");
  while (tableBody.hasChildNodes()) {
  	tableBody.removeChild(tableBody.lastChild);
  }
  
  // Select the input value from the input element and get the raw HTML node
  var inputValue = d3.select("#stateInput").node().value;
  
  // test the value of 
  console.log(inputValue);
  // console.log(inputElement);

  filteredSightings = sightings.filter(sighting => sighting.state === inputValue);

  filteredSightings.forEach(function(sighting) {
  	  console.log(sighting);
  	var row = tbody.append("tr");
  	row.append("td").text(sighting.datetime);
  	row.append("td").text(sighting.city);
  	row.append("td").text(sighting.state);
  	row.append("td").text(sighting.country);
  	row.append("td").text(sighting.shape);
  	row.append("td").text(sighting.durationMinutes);
  	row.append("td").text(sighting.comments); 
  })
});




// Make the countrySubmitButton Work
countrySubmitButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // delete the current table so we can print the filtered sightings data
  var tableBody = document.getElementById("tableBody");
  while (tableBody.hasChildNodes()) {
  	tableBody.removeChild(tableBody.lastChild);
  }
  
  // Select the input value from the input element and get the raw HTML node
  var inputValue = d3.select("#countryInput").node().value;
  
  // test the value of 
  console.log(inputValue);
  // console.log(inputElement);

  filteredSightings = sightings.filter(sighting => sighting.country === inputValue);

  filteredSightings.forEach(function(sighting) {
  	  console.log(sighting);
  	var row = tbody.append("tr");
  	row.append("td").text(sighting.datetime);
  	row.append("td").text(sighting.city);
  	row.append("td").text(sighting.state);
  	row.append("td").text(sighting.country);
  	row.append("td").text(sighting.shape);
  	row.append("td").text(sighting.durationMinutes);
  	row.append("td").text(sighting.comments); 
  })
});


// Make the shapeSubmitButton Work
shapeSubmitButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // delete the current table so we can print the filtered sightings data
  var tableBody = document.getElementById("tableBody");
  while (tableBody.hasChildNodes()) {
  	tableBody.removeChild(tableBody.lastChild);
  }
  
  // Select the input value from the input element and get the raw HTML node
  var inputValue = d3.select("#shapeInput").node().value;
  
  // test the value of 
  console.log(inputValue);
  // console.log(inputElement);

  filteredSightings = sightings.filter(sighting => sighting.shape === inputValue);

  filteredSightings.forEach(function(sighting) {
  	  console.log(sighting);
  	var row = tbody.append("tr");
  	row.append("td").text(sighting.datetime);
  	row.append("td").text(sighting.city);
  	row.append("td").text(sighting.state);
  	row.append("td").text(sighting.country);
  	row.append("td").text(sighting.shape);
  	row.append("td").text(sighting.durationMinutes);
  	row.append("td").text(sighting.comments); 
  })
});