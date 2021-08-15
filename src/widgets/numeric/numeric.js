widget();

async function widget() {
      
    let config = await getConfig();
    
    init()

    function init() {
        // html template
        
        for (var i = 0; i < config.length; i++) {
            let TheHTML = 
                `<p class='numeric-subject'>
                    <span>${config[i].data.subject}</span>
                    <span class='numeric-subject-count'>${config[i].data.subjectCount}</span>
                </p>
                <hr>
                <span class='numeric-price'>${config[i].data.price}</span><br />
                <div class='row numeric-details'>
                    <div class='column'>${config[i].data.detail1}</div>
                    <div class='column'>${config[i].data.detail2}</div>
                </div>`;
    
            // append html to div
            $(".widget-numeric_"+i).append(TheHTML);
        }
    }
}
