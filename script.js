// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");
//const { formSubmission } = require("./scriptHelper");
//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
   let list = document.getElementById("faultyItems");
   //list.style.visibility = "hidden"
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);   
      if (formSubmission(pilotName.value) === ""){
         event.preventDefault();
         console.log("submission prevented");
      }
   });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet();
       let name = listedPlanets[result].name;
       let diameter = listedPlanets[result].diameter;
       let star = listedPlanets[result].diameter;
       let distance = listedPlanets[result].distance;
       let moons = listedPlanets[result].moons;
       let imageURL = listedPlanets[result].imageURL;
       img.innerHTML = imageURL;

      addDestinationInfo(document, name, diameter, star, distance, moons, imageURL);
   })

});