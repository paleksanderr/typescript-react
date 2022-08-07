const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake = [
  ['f150'],
  ['corolla'],
  ['camaro'],
]

carMakers.map((car: string):string =>{
return car;
})

//flexible types

const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];