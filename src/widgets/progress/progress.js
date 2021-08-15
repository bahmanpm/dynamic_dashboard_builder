widget();

async function widget() {
      
    let config = await getConfig();
    
    init()

    function init() {
        // html template
        
        for (var i = 0; i < config.length; i++) {
            let TheHTML = 
                `<div class='progress-img'>
                    <img src='./src/images/${config[i].data.img}' >
                </div>
                <label for="file">${config[i].data.subject}</label>
                <progress id="file" max="100" value=${config[i].data.progress}> ${config[i].data.progress}% </progress><br>
                <a class='progress-link' href='${config[i].data.link}'>${config[i].data.linkTitle}</a>`;
    
            // append html to div
            $(".widget-progress").append(TheHTML);

            if (config[i].data.hasTitle) {
                let TITLE = `<div class='title'><h4>${config[i].data.title}</h4></div>`; 
                $(TITLE).insertBefore(".widget-progress");
            }
        }
    }
}
