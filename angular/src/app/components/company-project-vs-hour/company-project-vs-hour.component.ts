import { Component, OnInit } from '@angular/core';
declare var d3: any;
declare var $:any;
@Component({
  selector: 'company-project-vs-hour',
  templateUrl: './company-project-vs-hour.component.html',
  styleUrls: ['./company-project-vs-hour.component.css']
})
export class CompanyProjectVsHourComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.clear();
    
    const offenseNames = [
      "Completed",
      "Fondling",
      "Statutory Completed",
      "Sa"
    ];
    const years = ["Taskit", "Survey", "Auction"
    // ,"Asif","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","20291","20219","21029","12029","20229","20229","202229","20529","25029","52029","20269","20629","62029","27029","2w029"
  ];
    const offensesByYear = [
      {
        "Completed": 50,
        "Fondling": 10,
        "Statutory Completed":3,
        "Sa":2
      },
      {
        "Completed": 26,
        "Fondling": 4,
        "Statutory Completed": 5,
        "Sa":3
      },
      {
        "Completed": 25,
        "Fondling": 11,
        "Statutory Completed": 3,
        "Sa":2
      },
  
    ];
    
    const generateClassStr = str => {
      return str.replace(/\s+/g, '-').toLowerCase();
    }
    
    let n     = offenseNames.length, // number of layers
        m     = offensesByYear.length, // number of samples per layer
        stack = d3.stack().keys(offenseNames);
    
    let layers = stack(offensesByYear); // calculate the stack layout
    
    layers.forEach(function(d, i) {
      // add keys to every datapoint
      d.forEach(function(dd, j) {
        dd.year = years[j];
        dd.offenseName = offenseNames[i];
        dd.class = generateClassStr(dd.offenseName);
        dd.value =  dd.data[dd.offenseName]
      });
    });
    
    let yStackMax = d3.max(layers, function(layer) {
        return d3.max(layer, function(d) {
          return d[1];
        });
      });
    let margin = { top: 70, right: 15, bottom: 140, left: 50 },
      fullChartWidth =  600,
      fullChartHeight = 400,
      width  = fullChartWidth  - margin.left - margin.right,
      height = fullChartHeight - margin.top  - margin.bottom;
    
    d3.select("#stacked-bar-chart-container")
      .style("width",  fullChartWidth)
      .style("height", fullChartHeight)
    
    let x = d3
      .scaleBand()
      .domain(years)
      .rangeRound([0, width])
      .padding(0.08);
    
    let y = d3
      .scaleLinear()
      .domain([0, yStackMax])
      .range([height, 0]);
    let z = d3
      .scaleBand()
      .domain(offenseNames)
      .rangeRound([0, x.bandwidth()]);
    let color = ["#17a88f", "#f2ac37", "#b74549",, "#4d5d6e",, "#2778a7"]
    
    let svg = d3
      .select("#stacked-bar-chart-container1")
      .append("svg")
      .attr("width", width + margin.left + margin.right + 20)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");
    
    let layer = svg
      .selectAll(".layer")
      .data(layers)
      .enter()
      .append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) {
        return color[i];
      });
    
    // Define the div for the tooltip
    let tooltip = d3.select("body").append("div") 
        .attr("class", "tooltip")       
        .style("opacity", 0);
    // alert(x.bandwidth());
    // alert(m);
    var myLPadd =950;
    var myTPadd =620;
    let rect = layer
      .selectAll(".bar")
      .data(function(d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("class", d => generateClassStr(d.offenseName) + " bar")
      .attr("x", function(d) {
        return x(d.year);
      })
      .attr("y", height)
      .attr("width", x.bandwidth())
      // .attr("width", x.bandwidth()/x)
      .attr("height", 0)
      .on("mouseover", d => {
        // d3.selectAll(".bar")
        //   .filter(dd => dd.class != d.class)
        //   .style("opacity", 0.6)
      })
      .on("mousemove", function(d) {   
        tooltip
          .style("opacity", .9) 
          .html("<b>" + d.value + "</b> cases of " + d.offenseName + " in " + d.year)  
          .style("left", (d3.mouse(this)[0]) + myLPadd + "px")   
          .style("top",  (d3.mouse(this)[1]) + myTPadd + 40 + "px");  
        })          
      .on("mouseout", function(d) {  
        d3.selectAll(".bar").style("opacity", 1) 
        tooltip.style("opacity", 0); 
      });
    
    rect
      .transition()
      .delay(function(d, i) {
        return i * 10;
      })
      .attr("y", function(d) {
        return y(d[1]);
      })
      .attr("height", function(d) {
        return y(d[0]) - y(d[1]);
      });
    // alert(height);
    // height = 10;
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0))
    // .call(xAxis)
    .selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");
      // .append("g")
      // .attr("class", "x axis")
      // .attr("transform", "translate(0," + height + ")")
      // .call(d3.axisBottom(x).tickSizeOuter(0))
      // .attr("transform", "rotate(-90)");
    
      // add the Y gridlines
    svg.append("g")     
      .attr("class", "grid")
      .call(d3.axisLeft(y)
        .ticks(10)
        .tickSize(-width)
        .tickFormat("")
      )
    
    // Add the y Axis
    svg.append("g")
      .call(d3.axisLeft(y));
    
    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left - 30)
      .attr("x", 0 - (height / 2))
      .attr("dy", "3em")
      .style("text-anchor", "middle")
      .text("Total hours"); 
    
    let legend = svg
      .selectAll(".legend")
      .data(offenseNames.reverse()) // match stack order
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) {
        return "translate(0," + i * 15 + ")";
      });
    
    legend
      .append("rect")
      .attr("x", width-10)
      .attr("y", -70)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d, i) {
        return color[offenseNames.length - 1 - i]; // match stack order
      });
    
    legend
      .append("text")
      .attr("x", width - 24)
      .attr("y", -65)
      .attr("font-size", '10px')
      .attr("dy", ".35em")
      .attr("class", "barGraphLegend")
      .style("text-anchor", "end")
      .text(function(d) {
        return d;
      });
    
    d3.selectAll("input").on("change", change);
    
    function change() {
      (this.value === "grouped") ? transitionGrouped() : transitionStacked();
    }
    
    function transitionGrouped() {
      rect
        .transition()
        .duration(500)
        .delay(function(d, i) {
          return i * 10;
        })
        .attr("x", function(d) {
          return x(d.year) + z(d.offenseName);
        })
        .transition()
        .attr("y", function(d) {
          return y(d.data[d.offenseName]);
        })
        .attr("height", function(d) {
          return height - y(d.data[d.offenseName]);
        });
    }
    
    function transitionStacked() {
      rect
        .transition()
        .duration(500)
        .delay(function(d, i) {
          return i * 10;
        })
        .attr("y", function(d) {
          return y(d[1]);
        })
        .attr("height", function(d) {
          return y(d[0]) - y(d[1]);
        })
        .transition()
        .attr("x", function(d) {
          return x(d.year);
        })
    }

  }

}
