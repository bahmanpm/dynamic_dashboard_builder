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
