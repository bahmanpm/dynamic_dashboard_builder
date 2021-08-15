widget();

async function widget() {
    
    let config = await getConfig();

    init();

    function init() {
      // for (var i = 0; i < config.length; i++) {
          // let keys = Object.keys(config[0].data_pieSeries);
          am4core.ready(function() {
      
            // Create chart instance
            var chart = am4core.create("linechartdiv", am4charts.XYChart);
            let lineChartData = [];

            for (let i = 0; i < config.length; i++) {
              let dateArr = config[i].date.split(",");
              let previousDataArr = config[i].previousDate.split(",");
              let data = {
                date: new Date(dateArr[0],dateArr[1],dateArr[2]),
                value1: config[i].value1,
                value2: config[i].value2,
                previousDate: new Date(previousDataArr[0],previousDataArr[1],previousDataArr[2]),
              }
              lineChartData.push(data);
            }
            
            // Add data
            chart.data = lineChartData;
            
            // Create axes
            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 50;
            
            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            
            // Create series
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value1";
            series.dataFields.dateX = "date";
            series.strokeWidth = 2;
            series.minBulletDistance = 10;
            series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
            series.tooltip.pointerOrientation = "vertical";
            
            // Create series
            var series2 = chart.series.push(new am4charts.LineSeries());
            series2.dataFields.valueY = "value2";
            series2.dataFields.dateX = "date";
            series2.strokeWidth = 2;
            series2.strokeDasharray = "3,4";
            series2.stroke = series.stroke;
            
            // Add cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.xAxis = dateAxis;
            
            }); // end am4core.ready()
      // }
    }
}