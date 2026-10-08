interface Airplane{
    model:string;
    passengerCapacity:number;
    rangeInKm:number;
    isJet:boolean;
}

const fleet: Airplane[] = [
    {
        model: "Boeing 747",
        passengerCapacity: 416,
        rangeInKm: 13300,
        isJet: true
    },
    {
        model: "Cessna 172",
        passengerCapacity: 4,
        rangeInKm: 1280,
        isJet: false
    },
    {
        model: "Airbus A380",
        passengerCapacity: 853,
        rangeInKm: 15200,
        isJet: true
    },
];
    function printAirplaneInfo(airplane: Airplane): void {
        console.log(`Model: ${airplane.model}`);
        console.log(`Passenger Capacity: ${airplane.passengerCapacity}`);
        console.log(`Range in Km: ${airplane.rangeInKm}`);
        console.log(`Is Jet: ${airplane.isJet ? "Yes" : "No"}`);
    }

    fleet.forEach(printAirplaneInfo);