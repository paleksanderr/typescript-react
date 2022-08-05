const profile = {
  name: 'John',
  age: 30,
  cords: {
    lat:20,
    lng:30
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age }: { age: number }= profile;
const { cords: { lat, lng}}: { cords: {lat: number, lng: number}} = profile