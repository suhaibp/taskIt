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

  var bardata = [];
for (var i = 0; i < 100; i++) {
  bardata.push(Math.round(Math.random()*30) +1)
};

var height = 500,
		width = 800		
	
var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([0, height]);
	
var xScale = d3.scaleBand()
    .domain(d3.range(0, bardata.length))
    .range([0, width]);
	
var colors = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range(['#ffeb3b', '#d20f53']);
	
var tooltip = d3.select('body').append('div')
		.style('position', 'absolute')
		.style('background', '#fff')
		.style('padding', '5px')
		.style('border', '1px #000 solid')
		.style('border-radius', '5px')
		.style('opacity', '0');
	
var myChart = d3.select('#chart').append('svg')
					.attr('width', width)
					.attr('height', height)
					.style('background', '#fdf6e3')
					.selectAll('rect').data(bardata)
					.enter().append('rect')
						.style('fill', colors)
						.attr('width', xScale.bandwidth())
						.attr('height', 0)
						.attr('x', function(d,i) {
							return (i * xScale.bandwidth()) + 1;
						})
						.attr('y', height)

				.on('mouseover', function(d) {
          d3.select(this).style('opacity', '0.3')	
					tooltip.style('opacity', '1').html(d)
						.style('left', (d3.event.pageX)+'px')
						.style('top', (d3.event.pageY)+'px')	
				})
				.on('mouseout', function(d) {
          d3.select(this).style('opacity', '1')
					tooltip.style('opacity', '0')
				});

	myChart.transition()
		.attr('height', function(d){
			return yScale(d);
		})
		.attr('y', function(d){
			return height - yScale(d);
		})
		.duration(800)
		.delay(function(d,i) {
			return i * 20;
		});
}

/*______________________________________________BAR CHART ENDS____________________________________________*/
}
// export interface count {
//   company: string,
//   count: number
// }