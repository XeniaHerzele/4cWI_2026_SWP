import { fleet } from "./flugzeuge";

// map() erstellt aus jedem Flugzeug einen Eintrag mit Modell und Reichweite.
const airplaneDetails = fleet.map((airplane) =>
    `${airplane.model} - ${airplane.rangeInKm} km Reichweite`
);

// filter() waehlt nur Flugzeuge mit einer Reichweite von mindestens 5.000 km aus.
const longRangeAirplanes = fleet.filter((airplane) => airplane.rangeInKm >= 5000);

console.log("Alle Flugzeugmodelle und ihre Reichweite:");
// forEach() gibt jeden mit map() erstellten Eintrag einzeln aus.
airplaneDetails.forEach((details) => console.log(details));

console.log("\nFlugzeuge mit mindestens 5.000 km Reichweite:");
// forEach() gibt jedes zuvor gefilterte Flugzeug einzeln aus.
longRangeAirplanes.forEach((airplane) => {
    console.log(`${airplane.model}: ${airplane.rangeInKm} km`);
});