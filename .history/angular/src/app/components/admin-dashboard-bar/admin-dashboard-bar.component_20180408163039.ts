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
  barchart:any;
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
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
   data.forEach(elm =>{
    //  console.log(elm);
     if (elm.tbl_projects.length != 0){
      this.graphData = true;
       
       this.barchart.push({label: elm.cmp_name, value:(elm.tbl_projects.length)});
       // this.initSvg();
       // this.initAxis();
       // this.drawAxis();
       // this.drawBars();
     }
   });
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
   this.barchart.push({company: "elm.cmp_name", count:5});
     this.barchart.push({company: "elm.cmp_name", count:5});
   
   this.drawBar();
  //  console.log(data);
  });
      
  }



  /*_____________________________________BAR CHART____________________________________*/
drawBar(){// Create data array of values to visualize
  var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];
  
  // Create variable for the SVG
  var svg = d3.specify("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");
  
  // Select, append to SVG, and add attributes to rectangles for bar chart
  svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
            .attr("class", "bar")
            .attr("height", function(d, i) {return (d * 10)})
            .attr("width","40")
            .attr("x", function(d, i) {return (i * 60) + 25})
            .attr("y", function(d, i) {return 400 - (d * 10)});
  
  // Select, append to SVG, and add attributes to text
  svg.selectAll("text")
      .data(dataArray)
      .enter().append("text")
      .text(function(d) {return d})
             .attr("class", "text")
             .attr("x", function(d, i) {return (i * 60) + 36})
             .attr("y", function(d, i) {return 415 - (d * 10)});
}

/*______________________________________________BAR CHART ENDS____________________________________________*/
}
// export interface count {
//   company: string,
//   count: number
// }