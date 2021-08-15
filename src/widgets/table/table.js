widget();

async function widget() {

    //getting the script class
    const widgetID = document.currentScript.id;
    //widget class
    const wc = "."+widgetID;
        
    let config = await getConfig();

    init();

    function init() {
        // html template
        
        let TABS = `<div class="tab">`

        for (let i = 0; i < config.length; i++) { 
            TABS += `<button class="tablinks" onclick="openTab(event, 'tabcontent_${i}')">${config[i].tabName}</button>`;
        }

        TABS += `</div>`

        let CONTENTS = ``;

        for (let i = 0; i < config.length; i++) { 

            let display = "";
            if (i === 0) {
                display = "style='display:block'"
            } else {
                display = "style='display:none'"
            }

            CONTENTS += 
            `<div id='tabcontent_${i}' class="tabcontent" ${display}>
                <table>`

            CONTENTS += `<tr>`;
            for (let j = 0; j < config[i].head.length; j++) {
                CONTENTS += `<th>${config[i].head[j]}</th>`;
            }
            CONTENTS += `</tr>`;

            for (let k = 0; k < config[i].body.length; k++) {
                CONTENTS += `<tr>`;
                for (let l = 0; l < config[i].head.length; l++) {
                    if (config[i].body[k][l]) {
                        CONTENTS += `<td>${config[i].body[k][l]}</td>`;
                    } else {
                        CONTENTS += `<td>-</td>`;
                    }
                }
                CONTENTS += `</tr>`;
            }

            CONTENTS += `
                </table>
            </div>`;
        }
    
        // append html to div
        $(wc).append(TABS);
        $(wc).append(CONTENTS);
    }

}

function openTab(evt, item) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(item).style.display = "block";
    evt.currentTarget.className += " active";
}
