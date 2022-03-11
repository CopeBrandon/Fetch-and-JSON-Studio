// TODO: add code here
addEventListener("load", function(){
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    this.fetch(url).then(function(response){
        const jsonPromise = response.json();
        jsonPromise.then(function(json){
            //Creates an array that has to be less in length
            //than json, which is 7. 
            let astroArray = [];
            while(astroArray.length<json.length){
                let astroMostHours = {
                    hoursInSpace: -1
                };  
                for(let i=0;i<json.length;i++){
                    if(!astroArray.includes(json[i])&&json[i].hoursInSpace>astroMostHours.hoursInSpace){
                        astroMostHours=json[i];
                    }
                }
                astroArray.push(astroMostHours);
            }


            let container = document.getElementById("container");
            let astroString = "";
            let i = 0;
            //Creates the skill string to fill inside of the 
            //HTML and adds it to astroString. When it finishes
            //that, it changes the innerHTML value of container
            //to the value of astroString.
            for(i=0; i<json.length; i++){
                let skillString = "";
                for(let j =0; j<json[i].skills.length;j++){
                    skillString+=json[i].skills[j];
                    if(j!==json[i].skills.length-1){
                        skillString+=", ";
                    }
                }
                if(json[i].active === true){
                    astroString+=
                    `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li style="color:green">Active: ${json[i].active}</li>
                                <li>Skills: ${skillString}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>`;
                } else if (json[i].active === false){
                    astroString+=
                    `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li style="color:red">Active: ${json[i].active}</li>
                                <li>Skills: ${skillString}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>`;
                }
            }
            astroString+=`
            <div class="astronaut">
            Total Astronauts: ${i}
            </div>`
            container.innerHTML = astroString;

        })
    });
});


