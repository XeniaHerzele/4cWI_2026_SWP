export interface Airplane {
    model: string;
    passengerCapacity: number;
    rangeInKm: number;
    isJet: boolean;
}

export const fleet: Airplane[] = [
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
    }
];
