var data = [{"Klingons": 30}, 
			{"Vulcans": 22}, 
			{"Ferengi": 3}, 
			{"Humans": 13},
			{"Romulans": 2},
			{"ExBs": 17}];
console.log(data);

// Calculate total visits
var totalVisitors = 0;

for (item in data) {
	totalVisitors += Object.values(data[item])[0];
}

// Store picture for every species
var racePictures = [{"Klingons": "images/klingons.png"}, 
										{"Vulcans": "images/vulcans.png"}, 
										{"Ferengi": "images/ferengi.png"}, 
										{"Humans": "images/humans.png"},
										{"Romulans": "images/romulans.png"},
										{"ExBs": "images/exbs.png"}];

var raceTraits = [{"Klingons": "Proud, Aggressive, Tradition-bound"}, 
									{"Vulcans": "Logical, Stoicism"}, 
									{"Ferengi": "Greedy, Misogynistic, Untrustworthy"}, 
									{"Humans": "Outworldly, Idealistic, Expansionistic"},
									{"Romulans": "Moral, Militaristic"},
									{"ExBs": "Individuality, Capable of assimilating others"}];
						
// Calculate Dates
var todayDate = new Date().toUTCString().split(' ').slice(1, 5).join(' ');
var yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
yesterdayDate = yesterdayDate.toUTCString().split(' ').slice(1, 4).join(' ');

// Set the dimensions and margins of the graph
var margin = {top: 50, right: 120, bottom: 200, left: 120},
width = 1200 - margin.left - margin.right,
height = 800 - margin.top - margin.bottom;

// Append the svg
var svg = d3.select("#root")
						.append("svg")
						.attr("class", "svg-component")
						.attr("width", width + margin.left + margin.right)
						.attr("height", height + margin.top + margin.bottom)
						.append("g")
						.attr("transform",
									"translate(" + margin.left + "," + margin.top + ")");

// Add welcome
var welcome = svg.append("text")
								.attr("text-anchor", "end")
								.attr("transform", "translate("+ (width  + 100) +","+ (height - 550) +")")  
								.text("Welcome, Station Commandar")
								.attr("fill", "lightgray")
								.attr("font-size", "22")
								.attr("class", "welcome");

var time = svg.append("text")
								.attr("text-anchor", "end")
								.attr("transform", "translate("+ (width  + 100) +","+ (height - 530) +")")  
								.text(todayDate)
								.attr("fill", "lightgray")
								.attr("font-size", "22")
								.attr("class", "welcome");

// Add title & subtitle
var title = svg.append("text")
								.attr("text-anchor", "middle")
								.attr("x", "40%")
								.attr("y", "12%")
								.text("Star Trek")
								.attr("stroke", "#f2c300")
								.attr("font-size", "152")
								.attr("class", "title");

var subTitle = svg.append("text")
								.attr("text-anchor", "end")
								.attr("x", "58%") 
								.attr("y", "18%")
								.text("DEEP SPACE 12 DAILY REPORT")
								.attr("fill", "#f2c300")
								.attr("font-size", "52")
								.attr("class", "subTitle");

var leftRect = svg.append('rect')
								.attr("transform", "translate("+ (- 400 / 2) +","+ (- 30) +")")  
								.attr("y", "18%")
								.attr("height", 30 )
								.attr("width", 400)
								.attr('fill', "#f2c300");

var rightRect = svg.append('rect')
								.attr("transform", "translate("+ (width - 400 / 2) +","+ (- 30) +")")  
								.attr("y", "18%")
								.attr("height", 30 )
								.attr("width", 400)
								.attr('fill', "#f2c300");

// Add Summary
var summaryRect = svg.append('rect')
								.attr("transform", "translate("+ (width - 1200) +","+ (0) +")")  
								.attr("y", "20%")
								.attr("height", 30 )
								.attr("width", 1400)
								.attr('fill', "gray");

var summary = svg.append("text")
								.attr("text-anchor", "end")
								.attr("transform", 
											"translate("+ (width - 300) +"," + (+summaryRect.style("height").replace("px", "") - 5) +")")
								.attr("y", "20%")  
								.text("DATE: " + yesterdayDate  + "	\u25CF TOTAL VISITORS: "  + totalVisitors)
								.attr("fill", "lightgray")
								.attr("font-size", "32")
								.attr("class", "summary");

// Add X axis
var x = d3.scaleBand()
					.domain(data.map(function(d) { return Object.keys(d); }))
					.range([ 10, width ]);

var xAxisGenerator = d3.axisBottom(x);
xAxisGenerator.tickValues([]);

var xAxis = svg.append("g")
								.attr("transform", "translate(0," + height + ")")
								.call(xAxisGenerator);
								
xAxis.select(".domain").remove();

// Add Y axis
var y = d3.scaleLinear()
					.domain([0, d3.max(data, function(d) { return Object.values(d); })])
					.range([ height, 400 ]);

var yAxisGenerator = d3.axisLeft(y);
yAxisGenerator.tickValues([]);

var yAxis = svg.append("g")
							.call(yAxisGenerator);
yAxis.select(".domain").remove();

// Add Y axis label
var yLabel = svg.append("text")
								.attr("text-anchor", "end")  
								.attr("transform", "translate("+ ( margin.left / 3) +","+ (height + 65) +")") 
								.text("# of")
								.attr("fill", "#f2c300")
								.attr("font-size", "42")
								.attr("class", "yLabel");

var yLabel2 = svg.append("text")
								.attr("text-anchor", "end")  
								.attr("transform", "translate("+ ( margin.left / 3) +","+ (height + 100) +")") 
								.text("Visitors")
								.attr("fill", "#f2c300")
								.attr("font-size", "42")
								.attr("class", "yLabel");

// Define gradients for rects
var gradient = svg.append("defs")
									.append("svg:linearGradient")
									.attr("id", "gradient")
									.attr("x1", "0%")
									.attr("y1", "0%")
									.attr("x2", "0%")
									.attr("y2", "100%")
									.attr("spreadMethod", "pad");

gradient.append("stop")
				.attr("offset", "0%")
				.attr("stop-color", "white")
				.attr("stop-opacity", 1);

gradient.append("stop")
				.attr("offset", "33%")
				.attr("stop-color", "#D3D3D3")
				.attr("stop-opacity", 1);

gradient.append("stop")
				.attr("offset", "66%")
				.attr("stop-color", "#9E9E9E")
				.attr("stop-opacity", 1);

gradient.append("stop")
				.attr("offset", "100%")
				.attr("stop-color", "black")
				.attr("stop-opacity", 1);
			
// Add rects
var rects = svg.selectAll('.bar')
							.data(data)
							.enter().append('rect')
							.attr('x', function (d) { return x(Object.keys(d)) + x.bandwidth()  / 2; })
							.attr('y', function (d) { return y(Object.values(d)); })
							.attr("height", function (d) { return height - y(Object.values(d)); })
							.attr("width", x.bandwidth()  / 4)
							.attr("stroke", "none")
							.attr("fill", "url(#gradient)");

// Add # of visitors
var xLabel = svg.selectAll()
								.data(data)
								.enter()
								.append("text")
								.attr("y", function (d) { return y(0) + 100; })
								.attr("x", function (d) { return x(Object.keys(d)) + x.bandwidth() / 1.5; })
								.text(function (d) { return Object.values(d); })
								.attr("text-anchor", "middle")
								.attr("font-size","72")
								.attr("fill","#f2c300")
								.attr("class", "xLabel");

// Add glow filter
var defs = svg.append("defs");

var filter = defs.append("filter")
									.attr("id","glow");
									
filter.append("feGaussianBlur")
			.attr("stdDeviation", "10")
			.attr("result", "coloredBlur");
		
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
				.attr("in", "coloredBlur");
				
feMerge.append("feMergeNode")
				.attr("in", "SourceGraphic");

// Add description
var description = svg.append("text");

// Set highlight action
var highlight = function(d) {
	d3.select(this)
		.transition()
		.duration(200)
		.style("cursor", "pointer")
		.style("filter", "url(#glow)");
	description
		.text(Object.values(raceTraits.filter(function (v) { return Object.keys(v) == Object.keys(d)[0]})[0]))
		.attr("x", x(Object.keys(d)[0]) + x.bandwidth() / 2)
		.attr("y", y(Object.values(data.filter(function (v) { return Object.keys(v) == Object.keys(d)[0]})[0])) - 220)
		.attr("text-anchor", "middle")
		.attr("font-size","22")
		.attr("fill","#f2c300")
		.attr("class", "description");
	};
				
var notHighlight = function() {
	d3.select(this)
		.transition()
		.duration(200)
		.style("cursor", "default")
		.style("filter", "none");
	description.text("");
	};

// Add races pictures
var pictures = svg.selectAll()
									.data(racePictures)
									.enter()
									.append("svg:image")
									.attr("x", function (d) { return x(Object.keys(d)); })
									.attr("y", function (d) { 
										var value = Object.values(data.filter(function (v) { return Object.keys(v) == Object.keys(d)[0]})[0]);
										return y(value) - 200; })
									.attr("width", "200")
									.attr("height", "200")
									.attr("xlink:href", function (d) { return Object.values(d); })
									.on("mouseover", highlight)
									.on("mouseleave", notHighlight);

// Add races labels
var racesName = svg.selectAll()
										.data(data)
										.enter()
										.append("text")
										.attr("y", function (d) { return y(Object.values(d)) - 100; })
										.attr("x", function (d) { return x(Object.keys(d)) + x.bandwidth() / 2; })
										.text(function (d) { return Object.keys(d)[0].toUpperCase(); })
										.attr("text-anchor", "middle")
										.attr("font-size","22")
										.attr("fill","lightgray")
										.attr("class", "xLabel");