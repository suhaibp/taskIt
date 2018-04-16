import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AdminService } from './../../services/admin.service'
var $:any;
declare var d3: any;
@Component({
  selector: 'app-admin-dashboard-bar',
  templateUrl: './admin-dashboard-bar.component.html',
  styleUrls: ['./admin-dashboard-bar.component.css']
})
export class AdminDashboardBarComponent implements OnInit {
  // public barchart: count[] =[ ] ;
  graphData = true;
  chart: any;
  title = 'Company vs Survey';
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  barchart:any
  constructor(private superAdminService : AdminService) { }

  ngOnInit() {
    this.refresh();
  }


  refresh(){
    
    
    this.superAdminService.getBarDataforAdminDashboard().subscribe(data=>{
     console.log(data.length)
     if(data.length <= 0){
     }
     // console.log(this.graphData)
   this.barchart= [];
  //  data.forEach(elm =>{
  //   //  console.log(elm);
  //    if (elm.tbl_projects.length != 0){
  //     this.graphData = true;
       
  //      this.barchart.push({label: elm.cmp_name, value:(elm.tbl_projects.length)});
  //      // this.initSvg();
  //      // this.initAxis();
  //      // this.drawAxis();
  //      // this.drawBars();
  //    }
  //  });
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   this.barchart.push({label: "elm.cmp_name", value:5});
   
   this.drawBar();
  //  console.log(data);
  });
      
  }



  /*_____________________________________BAR CHART____________________________________*/
drawBar(){

  // var bardata = [];

  // for (var i = 0; i < 30; i++) {
  //   bardata.push(Math.round(Math.random() * 30) + 20);
  // }
  
  var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;
  
  var tempColor;
  
  var colors = d3.scale
    .linear()
    .domain([0, bardata.length * 0.33, bardata.length * 0.66, bardata.length])
    .range(["#B58929", "#C61C6F", "#268BD2", "#85992C"]);
  
  var yScale = d3.scale.linear().domain([0, d3.max(bardata)]).range([0, height]);
  
  var xScale = d3.scale
    .ordinal()
    .domain(d3.range(0, bardata.length))
    .rangeBands([0, width]);
  
  var tooltip = d3
    .select("body")
    .append("div")
    .classed("tooltip", true)
    .style("position", "absolute")
    .style("padding", "0 10px")
    .style("background", "white")
    .style("opacity", 0)
    .style("font", "12px Roboto");
  
  var myChart = d3
    .select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .selectAll("rect")
    .data(bardata)
    .enter()
    .append("rect")
    .style("fill", function(d, i) {
      return colors(i);
    })
    .attr("width", xScale.rangeBand())
    .attr("x", function(d, i) {
      return xScale(i);
    })
    .attr("height", 0)
    .attr("y", height)
    .on("mouseover", function(d) {
      tooltip.transition().style("opacity", 0.9);
  
      tooltip
        .html(d)
        .style("left", d3.event.pageX - 35 + "px")
        .style("top", d3.event.pageY - 30 + "px");
  
      tempColor = this.style.fill;
      d3.select(this).style("opacity", 0.5).style("fill", "yellow");
    })
    .on("mouseout", function(d) {
      d3.select(this).style("opacity", 1).style("fill", tempColor);
    });
  
  myChart
    .transition()
    .attr("height", function(d) {
      return yScale(d);
    })
    .attr("y", function(d) {
      return height - yScale(d);
    })
    .delay(function(d, i) {
      return i * 20;
    })
    .duration(1000)
    .ease("elastic");
}

/*______________________________________________BAR CHART ENDS____________________________________________*/
}
// export interface count {
//   company: string,
//   count: number
// }