// TODO: add code here
addEventListener("load", function(){
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    this.fetch(url).then(function(response){
        const jsonPromise = response.json();
        jsonPromise.then(function(json){
            console.log({json});
            let container = document.getElementById("container");
            let astroString = "";
            for(let i=0; i<json.length; i++){
                let skillString = "";
                for(let j =0; j<json[i].skills.length;j++){
                    skillString+=json[i].skills[j];
                    if(j!==json[i].skills.length-1){
                        skillString+=", ";
                    }
                }
                astroString+=
                `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${skillString}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}
                </div>`;
            }
            container.innerHTML = astroString;
            console.log(container.innerHTML);

        })
    });
});


