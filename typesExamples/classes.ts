class Vehicle {
  constructor(public age: number,public color: string) {
  } 

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle(10, 'siwy');
console.log(vehicle.age);
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, age:number,  color: string) {
    super(age, color);
  }

private drive(): void {
  console.log("vroom");
}
startDrivingProcess():void {
  this.drive();
  this.honk();
  console.log(car.wheels);
  console.log(car.color);
}

}

const car = new Car(2, 14, 'blue');
car.startDrivingProcess();

