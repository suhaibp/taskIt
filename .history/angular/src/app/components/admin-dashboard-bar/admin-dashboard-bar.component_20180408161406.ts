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
   
   this.drawBar();
  //  console.log(data);
  });
      
  }



  /*_____________________________________BAR CHART____________________________________*/
drawBar(){

  d3.select("#bchart").selectAll("svg").remove();
  var mydata = this.barchart;
  var dataMax = d3.max(mydata, function(d) {return d.count});
  
  var margin = { top: 15, right: 30, bottom: 85, left:45 }
  
  var width = 800 - margin.left - margin.right, 
      height = 450 - margin.top - margin.bottom,
      barWidth = 10;
  var tempColor;  //for mouseover effect
  
  var yScale = d3.scale.linear()
        .domain([0, dataMax])
        .range([0, height]);
  var xScale = d3.scale.ordinal()
        .domain(d3.range(0, mydata.length))
        .rangeBands([0, width],.2);
  
  var vGuideScale = d3.scale.linear()
        .domain([0, dataMax])  //guide numbering will be in the millions
        .range([height, 0]);
  var vAxis = d3.svg.axis()
        .scale(vGuideScale)
        .orient('left')
        .ticks(10);
  
  var hAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
  
  var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', '#333')
        .style('opacity', '.7')
        .style('color', '#fff')
        .style('border-radius', '3px')
  
  ////CHART////
  this.chart = d3.select('#bchart').append('svg')
      .style('background', '#fff')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate('+ margin.left +', '+ margin.top +')');
      // chart.exit().remove()
  var bars = this.chart.selectAll('rect')
      .data(mydata).enter()
      .append('rect')
      // .style('fill', '#3EAE9A')
      .attr('width', xScale.rangeBand())
      .attr('x', function(d,i) { return xScale(i) })
      .attr('height', 0) 
      .attr('y', height) 
      .attr('class', 'barhvr')
      ////Mouseover effect
      .on('mouseover', function(d) {
        tempColor = this.style.fill;
        d3.select(this)
          // .attr('fill', '#0F7D80 !important')
          // .attr('opacity', .9)
          .attr('cursor', 'pointer')
        tooltip.html("Company: "+d.company)
          .style('left', (d3.event.pageX +10) + 'px')
          .style('top', (d3.event.pageY -20) + 'px')
        tooltip
          .style('opacity', .9)
      })
      .on('mouseout', function(d) {
        d3.select(this)
          // .attr('fill', tempColor)
          // .attr('opacity', 1)
        tooltip.style('opacity', 0)
          .style('left', '0px')
          .style('top', '0px')
      })
        // .on("click", this.mouseclick)  
    // .on('click', (d, i) => {
    //       // this.svg.remove();
    //       this.piechart = []
    //       this.quest[i].ans.forEach((val) => {
    //         // console.log("****************");
            
    //         // console.log(this.quest[i]);
    //         // console.log("****************");

    //       if (val.count != 0) {
    //           this.piechart.push({ name: val.value, percent: val.count,answeredUser:val.answeredUser, ans_type : this.quest[i].ans_type });
    //       }
    //   });
    //   this.setgraph();
    // });
      
  var vGuide = d3.select('svg').append('g')
      vAxis(vGuide); 
      vGuide.attr('transform', 'translate('+ margin.left +','+ margin.top +')')
      vGuide.selectAll('path')
        .style({fill: 'none', stroke: '#000'})
      vGuide.selectAll('line')
        .style({stroke: '#000'})
      vGuide.selectAll('text')
        .attr('font-size', '.8em')
  
  var hGuide = d3.select('svg').append('g')
      hAxis(hGuide);
      hGuide.attr('transform', 'translate('+ margin.left +','+ (height+margin.top) +')')
      hGuide.selectAll('path')
        .style({fill: 'none', stroke: '#000'})
      hGuide.selectAll('line')
        .style({stroke: '#000'})
      hGuide.selectAll('text')
        .attr('transform', 'translate(12,5) rotate(55)')
        .attr('font-size', '12px')
        .style('text-anchor', 'start')
        .text(function(d) {
          return mydata[d].company;
        })
  
      //Label on left of Y axis
      d3.select('svg').append('text')
        .text('No. of Surveys')
        .style('text-anchor', 'middle')
        .style('font-weight', 'bold')
        .attr('transform', 'translate(12,'+ ((height+margin.top+margin.bottom)*.45) +') rotate(-90)')
        .attr('font-size', '12px').attr('letter-spacing',"4")
        
      //chart animation
      bars.transition()
        .attr('height', function(d){
          return yScale(d.count);
        })
        .attr('y', function(d){
          return height - yScale(d.count);
        })
        .delay(function(d,i) {
          return i*10
        })
        .duration(800)
        .ease('cubic-out') 
        
      // d3.select('#bchart').append('div').append('p')
      //   .html('* Data from 2013')
      //   .style('font-size', '.6em')
}

/*______________________________________________BAR CHART ENDS____________________________________________*/
}
// export interface count {
//   company: string,
//   count: number
// }