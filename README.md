# dynamic_dashboard_builder

**To see the dashboard, please :**

1. download the code. <br />
2. run it on a local server (for example http-server). <br />

you can install http-server using command below. <br /><br />
```npm install --global http-server ``` <br /><br />
then navigate to the code path and run : <br /><br />
```http-server ``` <br /><br />

### Structure

```
index.html
|--src
   config
   |--main.js
   |--gauge.json
   |--line.json
   |--numeric.json
   |--pie.json
   |--progress.json
   |--table.json
   css
   |--milligram.css
   |--styles.css
   js
   |--global.js
   images
   widgets
   |--gauge
      |--gauge.js
   |--line
      |--line.js
   |--numeric
      |--numeric.js
   |--pie
      |--pie.js
   |--progress
      |--progress.js
   |--table
      |--table.js
   
```

For each widget, a js file in widgets folder and a json config file in config folder has been considered. the js file can create instances of the widget using information in the config file. each widget can be loaded using `loadScript` in index.html and appears in specified position in `main.js`.

Generaly, Two main areas have been considered for the dashbourd and new widgets can be added as new objects. for example :

```"position_1_area_1": {
    "classList": ["widget-numeric", "widget-numeric_0"], // widget classes
    "widget": "numeric", // widget type
    "priority": 1, // determines the order of loading widgets
    "id": "", // chart id 
    "size": "halfFromStart" // determine size of widget using classes have been defined in styles.css
},
```

The property `position_1_area_1` will be used as the widget id and `createAreaUI` function uses them to generate a basic UI.

In this project liberaries below has been used :
milligram (a tiny css framework), jQuery, amChart
