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
  constructor(private superAdminService : AdminService) { }
  barchart:any;
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
   
   this.drawBar();
   
  //  console.log(data);
  });
      
  }



  /*_____________________________________BAR CHART____________________________________*/
drawBar(){
  var parentDiv = [];
  var descriptor = '';
  var runOnce = [];
  var ewidth;
  init('bargraph', dataset1, 'visitors', 'y', 80, 'y', 'Day of month', 'Visitors'); 
  // get content of .bar .node span
  
  // put content of span in .descriptor
  
  var dataset1 = {'1st March 2014':25000, '2nd March 2014':20000, '3rd March 2014':23000, '4th March 2014':19000, '5th March 2014':21000, '6th March 2014':25000, '7th March 2014':22000, '8th March 2014':18000, '9th March 2014':15000, '10th March 2014':13000, '11th March 2014':5100, '12th March 2014':10000, '13th March 2014':25000, '14th March 2014':20000, '15th March 2014':23000, '15th March 2014':19000, '15th March 2014':21000, '16th March 2014':25000, '17th March 2014':22000, '18th March 2014':18000, '19th March 2014':15000, '20th March 2014':13000, '21st March 2014':25000, '22nd March 2014':20000, '23rd March 2014':23000, '24th March 2014':19000, '25th March 2014':21000, '26th March 2014':25000, '27th March 2014':22000, '28th March 2014':18000, '15th March 2014':15000, '15th March 2014':13000, '15th March 2014':25000, '15th March 2014':20000, '15th March 2014':23000, '15th March 2014':19000, '15th March 2014':21000, '15th March 2014':25000, '15th March 2014':22000, '15th March 2014':18000, '15th March 2014':15000, '15th March 2014':13000 };
    
    var dataset2 = { 'August 2013':25000, 'September 2013':20000, 'October 2013':23000, 'November 2013':19000, 'December 2013':21000, 'January 2014':25000, 'February 2014':22000, 'March 2014':18000, 'April 2014':15000, 'May 2014':13000, 'June 2014':5100, 'July 2014':10000 };
   
  var dataset3 = { 'December 2013':12, 'January 2014':36, 'March 2014':45, 'April 2014':45, 'May 2014':100, 'June 2014':78, 'July 2014':45 };
  
  var dataset4 = { 'December 2013':12, 'January 2014':36, 'March 2014':45, 'April 2014':45, 'May 2014':100, 'June 2014':78};
    
  var dataset5 =  { 'December 2013':12, 'January 2014':36, 'March 2014':45, 'April 2014':45, 'May 2014':100};
  
  var dataset6 =  { 'December 2013':12, 'January 2014':36, 'March 2014':45, 'April 2014':45};
  
  var dataset7 =  { 'December 2013':12, 'January 2014':36, 'March 2014':45 };
  
  var dataset8 =  { 'December 2013':12, 'January 2014':36 };
  
  var dataset9 =  { 'December 2013':12 };
  
  
    function drawGraph(parent, dataset, desc, axis, axisize, yaxisLabel, xAxisLabelText, yAxisLabelText) {
      //Width height and margin
      
         
      var margin = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        w = ewidth;
    var h = 200 - margin.top - margin.bottom;
      var barPadding = 10;
      var ymargin;
  
      if (axis === 'y') {     
      } else {
        axisize = 0;
      }
       if (yaxisLabel === 'y') { 
            var axisLabel = 20;
            ymargin = "20";
       } else {
            var axisLabel = 0;
           ymargin = 0;
       }         
      
      
       w = w - axisize - axisLabel - ymargin;
      // checking the largest value of array and basing all bar height off it 
      // essentially setting max value as 100% of graph height etc
      var mathArray = [];
      var dataset = dataset;
  
      $.each(dataset, function(key, value) {
        mathArray.push(value);
      });
  
      var maxVal = Math.max.apply(Math, mathArray);
      var minVal = 0;
  
      var pixMax = h / maxVal;
      var data = [];
      $.each(mathArray, function(key, value) {
        data[key] = Math.round(value * pixMax);
      });
      var numLen = mathArray.length;
      //Create SVG element
      var svg = d3.select(parent)
        .style("width", w)
        .style("height", h + "px")
        .style("display", "block")
          .style("margin-left", ymargin + "px")
        .style("position", "relative");
  
  
  
      if (yaxisLabel === 'y') {
        var yaxisLabel = svg
          .append('span')
          .attr('class', 'qgSBG-ylabel')
          .html(yAxisLabelText);
      }
  
      
      if (axis === 'y') {
        var yaxis = svg
          .append("span")
          .attr("class", "qgSBG-yaxis")
          .style("height", h + "px")
          .style("width", axisize - 20 + "px");
        yaxis
          .append('span')
          .attr('class', 'qgSBG-yMax')
          .html(maxVal);
        yaxis
          .append('span')
          .attr('class', 'qgSBG-yMin')
          .html(minVal);
        yaxis
          .append("span")
          .attr("class", "qgSBG-yaxisBar")
          .style("height", h - 2 + "px")
          .style("width", 5 + "px")
          .style("left", axisize - 12 + "px");
      }
  
      
      
      
      var bar = svg.selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("overflow", "hidden")
        .style("margin-left", function(d, i) {
  
          var marginScaler = 1;
          if (numLen < 4) {
            marginScaler = .6;
          }
          if (numLen < 3) {
            marginScaler = .4;
          }
  
  
          // padding and width set by 3/4 width bars, 1/4 padding and 1/8 offset to center bars
          // axisize is how much room for the axis text - offsets the graph by required amount - set in init
          // init('bargraph', dataset1, 'visitors', 'y', 150); <-- the 150 would make the graph offset by 150
          // and the y turns it on, if y isn't set, it wont load and will default to 0 and the graph will be
          // full width with no axis
  
          return ((((w / (numLen)) * i) + (1 / 8 * w / numLen)) * marginScaler) + axisize + "px";
  
        })
        .style("width", function(d, i) {
          var widthScaler = 1;
          if (numLen < 4) {
            widthScaler = .6;
          }
          if (numLen < 3) {
            widthScaler = .4;
          }
          return (3 / 4 * w / numLen) * widthScaler + "px";
  
        })
        .style("height", h + "px")
  
      .append("div")
        .attr("class", function(d) {
          if (runOnce[$(parent).attr('id')] === false) {
            return 'node';
          } else {
            return 'node qgSBC-colour';
          }
        })
        .attr("margin-data", function(d) {
          return (h + margin.top - d) + 1 + "px";
          //return h + "px";
        })
        .style("width", function(d, i) {
          return 3 / 4 * w / numLen + "px";
        })
        .style("margin-top", function(d) {
          if (runOnce[$(parent).attr('id')] === false) {
            return h + "px";
          } else {
            return (h + margin.top - d) + 1 + "px";
          }
        })
        .append("div")
        .insert("span")
        .html(function(d, j) {
          var spanText = [];
          var num = j;
          //.console.log(dataset[j]);
          //spanText= dataset[i];    
          $.each(dataset, function(key, value) {
            spanText.push('<strong>' + key + '</strong>: <span class="qgSBS-barval">' + value + '</span> ' + desc);
          })
          //.console.log('span text:' + spanText);
          return spanText[num];
        });
  
       xAxisLabelText = '<strong>' + xAxisLabelText + '</strong>';
  
      loader(parentDiv, desc, xAxisLabelText);
      // load animation
      if (runOnce[$(parent).attr('id')] === false) {
        animBars($(parent).attr('id'));
        runOnce[$(parent).attr('id')] = true;
      }
    }
  
    function animBars(parentDiv) {
      var blam;
      $('#' + parentDiv + ' .node').each(function(i) {
        blam = $(this).attr('margin-data');
        var delay = 100 + i * 100;
        var thisThing = $(this);
        $(this).delay(delay).animate({
          marginTop: blam,
          easing: 'swing'
        }, 1000);
        function classItUp(){
          $(thisThing).attr('class', 'node qgSBC-colour');
        }
        setTimeout(classItUp, delay + 200);
        
        
        i++;
      });
    }
  
  function setSize(parent, dataset, desc, axis, axisize, axisLabel, xAxisLabelText, yAxisLabelText) {
      // setting a min width on the graph, you don't want it dissapearing... 
    
      ewidth = parent.clientWidth;
      if (axisize) {
        if (parent.clientWidth < (axisize + 150)) {
          ewidth = axisize + 150;
        }
      } else if (parent.clientWidth < 150) {
        ewidth = axisize + 150;
      }
      var eheight = parent.clientHeight;
  
      $(parent).empty();
      $('<style>.svg-wrapper.hover .shape {stroke-dasharray: ' + (ewidth + 16) + 'px;   stroke-dashoffset:  ' + (ewidth + 16) + 'px;}</style>').appendTo(parent);
      drawGraph(parent, dataset, desc, axis, axisize, axisLabel, xAxisLabelText, yAxisLabelText);
    }
  
    function init(parent, dataset, desc, axis, axisize, axisLabel, xAxisLabelText, yAxisLabelText) {
      
  
       runOnce[parent] = false;
      var elemD = document.getElementById(parent);
      parentDiv.push(parent);
      $(elemD).wrap('<div class="wrap ' + parent + ' "></div>');
      //$('<div class="descriptor" style="width: 100%;"></div>').insertBefore(elemD);  
      $('<div class="svg-wrapper"><svg height="25" width="100%" xmlns="http://www.w3.org/2000/svg"><rect class="shape" height="25" width="100%" /><div class="descriptor text"><div class="xAxisTitle">' + xAxisLabelText + '</div><div class="bartext"></div></div></svg></div>').insertAfter(elemD);
      setSize(elemD, dataset, desc, axis, axisize, axisLabel, xAxisLabelText, yAxisLabelText);
  
      var that = this;
      var currentHeight;
      var currentWidth;
  
      $(window).resize(function() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        if (currentHeight == undefined || currentHeight != windowHeight || currentWidth == undefined || currentWidth != windowWidth) {
          // redraw the chart here will make IE8 fire resize event again
          currentHeight = windowHeight;
          currentWidth = windowWidth;
          that.setSize(elemD, dataset, desc, axis, axisize, axisLabel, xAxisLabelText, yAxisLabelText);
        }
      });
  
    }
  
  
    function loader(parent, desc, xAxisLabelText) {
     var test;
      
      $(".bar").mouseover(function( event ) {
        
        $.each(parent, function(key, value) {
        
          if ($(event.target).parents('#' + value).parent().hasClass(value)) {
            var text_val = $(event.target).find('span').html();
            var target = '.' + value + ' .descriptor .bartext';        
            var target2 = '.' + value + ' .descriptor .xAxisTitle';        
            $(target).html(text_val);
            $(target2).hide();
            $(target).closest('.svg-wrapper').addClass('hover');
          }
        })
      });
      $(".bar").mouseout(function() {
          $(this).closest('.wrap').find('.descriptor .bartext').html('');
          $(this).closest('.wrap').find('.descriptor .xAxisTitle').show();
        
          $('.svg-wrapper').removeClass('hover');
      });
      
      
      
      $(".bar").click(function() {
  
        $.each(parent, function(key, value) {
  
          if ($(event.target).parents('#' + value).parent().hasClass(value)) {
            var text_val = $(event.target).find('span').html();
            //.console.log(text_val);
            var target = '.' + value + ' .descriptor';
            $(target).html(text_val);
          }
  
        })
      });
    }
}

/*______________________________________________BAR CHART ENDS____________________________________________*/
}
// export interface count {
//   company: string,
//   count: number
// }