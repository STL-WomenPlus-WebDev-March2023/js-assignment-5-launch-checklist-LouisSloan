// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");
// const { formSubmission } = require("./scriptHelper");
// const { validateInput } = require("./scriptHelper");


window.addEventListener("load", function() {
   let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
let form = document.querySelector("form");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPicked = pickPlanet(listedPlanets);
       let name = planetPicked.name;
       let diameter = planetPicked.diameter;
       let star = planetPicked.diameter;
       let distance = planetPicked.distance;
       let moons = planetPicked.moons;
       let imageURL = planetPicked.image;

      addDestinationInfo(document, name, diameter, star, distance, moons, imageURL);
   })
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let pilot = pilotName.value;
      let copilotName = document.querySelector("input[name=copilotName]");
      let copilot = copilotName.value;
      let fuel = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = fuel.value;
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargoLevel = cargoMass.value;
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel); 
         event.preventDefault();
         console.log("submission prevented");
});
});

