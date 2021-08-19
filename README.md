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
