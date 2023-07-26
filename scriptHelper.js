// Write your helper functions here!
require('isomorphic-fetch');

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
   else if (isNaN(Number(testInput))) {
    return "Not a Number";
   }
   else {
    return "Is a Number";
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number"){
      alert("Missing or invalid data, please review and resubmit entry.");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Pilot ${copilot} is ready.`;
        let status = document.getElementById("launchStatus");

        if (Number(fuelLevel) < 10000 && Number(cargoLevel) <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E";
        } else if(Number(fuelLevel) >= 10000 && Number(cargoLevel) > 10000){
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass is too high for launch"
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E"; 
        } else if(Number(fuelLevel) < 10000 && Number(cargoLevel) <= 10000){
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            fuelStatus.innerHTML = "Fuel level too low for launch";
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E"; 
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            status.innerHTML = "Shuttle is Ready for Launch";
            status.style.color = "#419F6A";
        }
    }
    
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
