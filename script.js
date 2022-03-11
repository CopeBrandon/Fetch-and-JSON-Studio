// TODO: add code here
addEventListener("load", function () {
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    this.fetch(url).then(function (response) {
        const jsonPromise = response.json();
        jsonPromise.then(function (json) {
            //Creates an array that has to be less in length
            //than json, which is 7. 
            let astroArray = [];
            while (astroArray.length < json.length) {
                let astroMostHours = {
                    hoursInSpace: -1
                };
                for (let i = 0; i < json.length; i++) {
                    if (!astroArray.includes(json[i]) && json[i].hoursInSpace > astroMostHours.hoursInSpace) {
                        astroMostHours = json[i];
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
            for (i = 0; i < astroArray.length; i++) {
                let skillString = "";
                for (let j = 0; j < astroArray[i].skills.length; j++) {
                    skillString += astroArray[i].skills[j];
                    if (j !== astroArray[i].skills.length - 1) {
                        skillString += ", ";
                    }
                }

                astroString +=
                    `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astroArray[i].firstName} ${astroArray[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astroArray[i].hoursInSpace}</li>`;
                if (astroArray[i].active === true) {
                    astroString+=
                    `           <li style="color:green">Active: ${astroArray[i].active}</li>
                    `;

                } else if (astroArray[i].active === false) {
                    astroString +=
                    `           <li style="color:red">Active: ${astroArray[i].active}</li>
                    `
                } else {
                    //:)
                    alert("Something went wrong here, seems like you've somehow managed to make astroArray[i] not a boolean?");
                }
                astroString += 
                    `           <li>Skills: ${skillString}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astroArray[i].picture}>
                    </div>`;
            }
            astroString += `
                    <div class="astronaut">
                    Total Astronauts: ${i}
                    </div>`
            container.innerHTML = astroString;

        })
    });
});


