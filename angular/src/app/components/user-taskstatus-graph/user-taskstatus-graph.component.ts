import { Component, OnInit } from '@angular/core';
import { UserService} from './../../services/user.service';
declare var d3: any;
declare var $:any;
@Component({
  selector: 'user-taskstatus-graph',
  templateUrl: './user-taskstatus-graph.component.html',
  styleUrls: ['./user-taskstatus-graph.component.css'],
  // inputs: ['containerId','hold','inprogress','done','newy']
})
export class UserTaskstatusGraphComponent implements OnInit {

  projects:any;
  selectedValue1:any;
  projecttask:any;
  lastStatus2:any;
  newyetstart:any;
  countask=[];
  countaskdone2=[];
  countaskhold2=[];
  countaskinprogress2=[];
  countasknew2=[];
  // countask=[];
  // containerId = '';
  hold = '';
  inprogress = '';
  done = '';
  newy = '';
  constructor(private userService : UserService) { }

  ngOnInit() {
  
   

  this.getAllProjects();
  }


  getAllProjects(){
    this.userService.getAllProject().subscribe(data=>{
 
     this.projects = data;
     
      if(data.length > 0){
        this.selectedValue1=data[0].id;
      }
       // else{
      //   console.log('no projects');
      // }
     
      this.taskstatus1();
      // });
    });
  }
   //#########No.of task vs status###############
   taskstatus1(){
    // this.newyetstart=8;
      this.userService.getProjectdetails(this.selectedValue1).subscribe(res=>{
        // console.log(res)
        // this.projectsingle=res.singleproject;
        this.projecttask=res.myTasks;
        this.projecttask.forEach(elm_mod => {
       
          elm_mod.tbl_project_tasks.forEach(elm_task => {
            this.countask.push(elm_task.id);
              this.lastStatus2 = elm_task.tbl_task_status_assocs[elm_task.tbl_task_status_assocs.length - 1];

            if (this.lastStatus2 !== undefined) {
            if(this.lastStatus2.tbl_task_status.status == 'done'){
              this.countaskdone2.push(elm_task.id);
            }
            if(this.lastStatus2.tbl_task_status.status == 'hold'){
              this.countaskhold2.push(elm_task.id);
            }
            if(this.lastStatus2.tbl_task_status.status == 'inprogress'){
              this.countaskinprogress2.push(elm_task.id);
            }
            if(this.lastStatus2.tbl_task_status.status == 'new'){
              this.countasknew2.push(elm_task.id);
            }
          }


        });
      });
    
  this.newyetstart=(this.countask.length)-(this.countaskdone2.length+this.countaskinprogress2.length+this.countaskhold2.length)
      // console.log(this.newyetstart+"uu") 
      this.bargraph();
   });
 


  }
bargraph(){
  d3.select('#containerId').selectAll("svg").remove();
  const offenseNames = [
    "count",
   
  ];
  console.log(this.newy)
  const years = ["On Hold", "Completed","In Progress","New-Yet to Star"];
  const offensesByYear = [
    {
      "count": this.countaskhold2.length,
     },
    { "count":  this.countaskdone2.length,
    },
    {
      "count": this.countaskinprogress2.length,
     },
    { "count": this.newyetstart,
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
  let margin = { top: 70, right: 15, bottom: 40, left: 50 },
    fullChartWidth = 400, 
      fullChartHeight = 300,
      
    width  = fullChartWidth  - margin.left - margin.right,
    height = fullChartHeight - margin.top  - margin.bottom;
  
  d3.select("#containerId")
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
  let color = ["#beaed4", "#7fc97f", "#fdc086"]

  let svg = d3
    .select("#containerId")
    .append("svg")
    .attr("width", width + margin.left + margin.right + 20)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + (margin.left + 20) + "," + margin.top + ")");
    let mycount = 1;  
  let layer = svg
    .selectAll(".layer")
    .data(layers)
    .enter()
    .append("g")
    .attr("class", "layer")
    .style("fill",(d, i)=>{
      // mycount++;
      //  alert(mycount);
      // alert(i);
      // if(mycount == 0){
      //   mycount++;
      //   return '#7fc97f';
        
      // }else{
      //   mycount++;
      //   return  '#279428';
      // }
    //   alert(d);
    //  // alert(i);
      return '#7fc97f';
    });
  
  
  let rect = layer
    .selectAll(".bar")
    .data(function(d) {
      return d;
    })
    .enter()
    .append("rect")
    // .attr("class", d => generateClassStr(d.offenseName) + " bar")
    .attr("x", function(d) {
      return x(d.year);
    })
    .attr("y", height)
    .attr("width", x.bandwidth() )
    .attr("height", 0)
    .on("mouseover", d => {
      d3.select(this)
        // .filter(dd => dd.class != d.class)
      //  .style("opacity", 0.6)
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
  
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height  +")")
      .call(d3.axisBottom(x));
        // add the Y gridlines
// svg.append("g")     
// .attr("class", "grid")
// .call(d3.axisLeft(y)
//   .ticks(10)
//   .tickSize(-width)
//   .tickFormat("")
// )

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
.text("No of Tasks"); 
}

}