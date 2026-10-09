import { fleet } from "./flugzeuge";
import type { Airplane } from "./flugzeuge";

    function printAirplaneInfo(airplane: Airplane): void {
        console.log(`Model: ${airplane.model}`);
        console.log(`Passenger Capacity: ${airplane.passengerCapacity}`);
        console.log(`Range in Km: ${airplane.rangeInKm}`);
        console.log(`Is Jet: ${airplane.isJet ? "Yes" : "No"}`);
    }

    printAirplaneInfo(fleet[0]); // Ausgabe der Informationen des ersten Flugzeugs im Array
