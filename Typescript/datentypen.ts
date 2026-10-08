interface Person{
   id:number;
   firstName:string;
   lastName:string;
   age:number;
   email:string;
   isMarried:boolean;
   address:{
    street: string;
    city: string;
    postalCode: string;
    country: string;
   },
   phoneNumbers:{
type: string;
number: string;
   }[];
   hobbies:string[];
}

const person: Person = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "JohnDoe@example.com",
    isMarried: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: "12345",
        country: "USA"
    },
    phoneNumbers: [
        {
            type: "home",
            number: "555-1234"
        },
        {
            type: "work",
            number: "555-5678"
        }
    ],
    hobbies: ["reading", "swimming", "coding"]
};

function printName(person: Person) {
    console.log(`${person.isMarried ? "Mr." : "Ms."} ${person.firstName} ${person.lastName}`);
}

printName(person);