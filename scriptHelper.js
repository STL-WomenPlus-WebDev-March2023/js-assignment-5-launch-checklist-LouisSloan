// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget");
   div.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   }

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   }
   else if (isNaN(testInput)) {
    return "Not a Number";
   }
   else {
    return "Is a Number";
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoLevel = document.querySelector("input[name=cargoMass]");
    if (validateInput(pilot) !== "Not a Number" && validateInput(copilot) !== "Not a Number" && validateInput(fuelLevel) !== "Is a Number" && validateInput(cargoLevel) !== "Is a Number"){
      alert("Missing or invalid data, please review and resubmit entry.");
        return;
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Pilot ${copilot} is ready.`;
        list.style.faultyItems = "visible";
        if (Number(fuelLevel) < 10000){
            fuelStatus.innerHTML = 'Not enough fuel to launch!';
            launchStatus.innerHTML = '<span style="color:red">Shuttle is not ready to launch.</span>';
        } else if (Number(cargoLevel > 10000)){
            cargoStatus.innerHTML = 'Too heavy to launch!';
            launchStatus.innerHTML = '<span style="color:red">Shuttle is not ready to launch.</span>';
        } else {
            launchStatus.innerHTML = '<span style="color:#green">Shuttle ready for launch!</span>';
        }
    }
    
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random*length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
