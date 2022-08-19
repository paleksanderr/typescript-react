import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap'

export class Company implements Mappable {
	companyName: string;
  catchPhase: string;
	location: {
		lat: number;
		lng: number;
	};

  constructor(){
this.companyName = faker.company.companyName();
this.catchPhase = faker.company.catchPhrase();
this.location = {
  lat: parseFloat(faker.address.latitude()),
  lng: parseFloat(faker.address.longitude()),
};
}
markerContent(): string {
  return `<h1>the company name is ${this.companyName} and the catch phase is ${this.catchPhase}</h1>`;
}
}