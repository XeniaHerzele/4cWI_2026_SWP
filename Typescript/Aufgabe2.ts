import { fleet } from "./flugzeuge";

// map() erstellt aus jedem flugzeug einen eintrag mit modell + reichweite
const airplaneDetails = fleet.map((airplane) =>
    `${airplane.model} - ${airplane.rangeInKm} km Reichweite`
);

// filter wählt nur flugzeuge mit reichweite von mind 5.000 km 
const longRangeAirplanes = fleet.filter((airplane) => airplane.rangeInKm >= 5000);

console.log("Alle Flugzeugmodelle und ihre Reichweite:");
// forEach gibt jeden mit map erstellten eintrag aus
airplaneDetails.forEach((details) => console.log(details));

console.log("\nFlugzeuge mit mindestens 5.000 km Reichweite:");

// forEach gibt jedes gefilterte flugzeug einzeln aus
longRangeAirplanes.forEach((airplane) => {
    console.log(`${airplane.model}: ${airplane.rangeInKm} km`);
});