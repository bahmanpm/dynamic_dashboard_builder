widget();

async function widget() {

    //getting the script id
    const widgetID = document.currentScript.id;
    //widget class
    const wc = "."+widgetID;
    
    let config = await getConfig();

    init();

    function init() {

        if (config[0].hasTitle) {
            let TITLE = `<div class='title'><h4>${config[0].title}</h4></div>`; 
            $(TITLE).insertBefore(wc);
        }
        
        for (var i = 0; i < config.length; i++) {
            let keys = Object.keys(config[i].data[0]);
            // Create chart instance
            let chart = am4core.create(config[i].id, am4charts.PieChart);
            
            // Add data
            chart.data = config[i].data;
            
            // Add and configure Series
            let pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.category = keys[0];
            pieSeries.dataFields.value = keys[1];
        }
    }
}