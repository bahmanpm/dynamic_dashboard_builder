//fetch request to get the config
async function getConfig(url) {
    let result;
    if (url) {
        result = await fetch(url);
    } else {
        result = await fetch(document.currentScript.dataset.config);
    }
    let config = await result.json();
    return config
}

// load widgets and config files
function loadScript(src, id, config) {
    let script = document.createElement('script');
    let dataConfig = document.createAttribute("data-config");
    dataConfig.value = config;
    
    script.async = false;
    script.id = id;
    script.src = src;
    script.setAttributeNode(dataConfig);
    document.body.append(script);
}

// put widget specifics into positions
function specifyWidgetsIntoPositions(obj) {
    for (const property in obj) {
        if (property) {
            if (obj[property].size) {
                document.getElementById(property).parentElement.classList.add(obj[property].size);
            }
            if (obj[property].classList) {
                for (let i = 0; i < obj[property].classList.length; i++) {
                    document.getElementById(property).classList.add(obj[property].classList[i]);
                }
            }
            if (obj[property].id) {
                document.getElementById(property).id = obj[property].id;
            }
        }
    }
}

// collect requested item from config
function collect(obj, source) {
    let arr = [];
    for (const property in obj) {
        if (property) {
            if (source === "property") {
                arr.push(property);
            }
            if (source === "widget" && obj[property].widget) {
                arr.push(obj[property].widget);
            }
            if (source === "priority" && obj[property].priority) {
                arr.push(obj[property].priority);
            }
        }
    }
    return [...new Set(arr)];
}

// sort widgets based on the specified priorities
function sort(widgets, priorities) {
    let index;
    let sorted = [];

    for (let i = 1; i <= widgets.length; i++) {
        index = priorities.indexOf(i);
        sorted[index] = widgets[i-1];
    }
    return sorted;
}

// create a basic elements of widgets area
function createAreaUI(obj, source) {
    let element = $("#"+source);
    let item = ``;

    for (let i = 0; i < obj.length; i++) {
        item += 
        `<div class="column hi">
            <div id="${obj[i]}"></div>
        </div>`;

    }
    element.append(item) ;
}