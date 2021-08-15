widget();

async function widget() {
    
    let config = await getConfig();

    init();

    function init() {
      for (var i = 0; i < config.length; i++) {
          let keys = Object.keys(config[0].data_pieSeries);
          am4core.ready(function() {
      
              // Create chart instance
              var chart = am4core.create("gaugechartdiv", am4charts.PieChart);
              
              // Let's cut a hole in our Pie chart the size of 40% the radius
              chart.innerRadius = am4core.percent(40);
              
              
              
              // Add and configure Series
              var pieSeries = chart.series.push(new am4charts.PieSeries());
              pieSeries.dataFields.value = "value";
              pieSeries.dataFields.category = "category";
              pieSeries.slices.template.stroke = am4core.color("#fff");
              pieSeries.innerRadius = 10;
              pieSeries.slices.template.fillOpacity = 0.5;
              
              pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
              pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
              pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";
              
              
              // Add data
              pieSeries.data = [{
                "category": "",
                "value": 80
              }, {
                "category": "Unused",
                "value": 20,
                "labelDisabled":true
              }];
              
              // Disable sliding out of slices
              pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
              pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
              
              // Add second series
              var pieSeries2 = chart.series.push(new am4charts.PieSeries());
              pieSeries2.dataFields.value = "value";
              pieSeries2.dataFields.category = "category";
              pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
              pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
              pieSeries2.slices.template.propertyFields.fill = "fill";
              
              // Add data
              pieSeries2.data = [{
                "category": "Used",
                "value": 80
              }, {
                "category": "Remaining",
                "value": 20,
                "fill":"#dedede"
              }];
              
              
              pieSeries.adapter.add("innerRadius", function(innerRadius, target){
                return am4core.percent(40);
              })
              
              pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
                return am4core.percent(60);
              })
              
              pieSeries.adapter.add("radius", function(innerRadius, target){
                return am4core.percent(100);
              })
              
              pieSeries2.adapter.add("radius", function(innerRadius, target){
                return am4core.percent(80);
              })
              
              }); // end am4core.ready()
      }
    }
}