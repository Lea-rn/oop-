//// o.o.p : objected oriented programming

// const Person = function (name, birth) {
//   ////// contructor function ....
//   this.firstName = name;
//   this.birthYear = birth;
//   //// d'ont do that XXXXX ::
//   //   this.calcAge = function () {
//   //     console.log(2026 - this.birthYear);
//   //   };
//   Person.prototype.calcAge = function () {
//     console.log(2026 - this.birthYear);
//   };
// };

////// inheritance ::

// const human1 = new Person("jessica", 1993);
// const human2 = new Person("peter", 2000);
// console.log(human1);
// console.log(human2);
// console.log(human1.calcAge());

// const x = new Array("peter", "jessica");

// console.log(x);

///// class declaration ::

// class Student {
//   constructor(name, birth) {
//     this.firstName = name;
//     this.birthYear = birth;
//     ////don't do this XXX ::
//     // this.calcAge = function () {
//     //   console.log(2026 - this.birthYear);
//     // };
//   }

//   calcAge() {
//     console.log(2026 - this.birthYear);
//   }
// }

// const mark = new Student("mark", 1500);
// console.log(mark);
// const youssef = new Student("youssef", 2000);
// console.log(youssef);

////// challange correction ::
///// contructor function ::
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   Car.prototype.accelerate = function () {
//     // this.speed = this.speed + 10
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   };

//   Car.prototype.brake = function () {
//     // this.speed = this.speed - 5
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   };
// };

// const bmw = new Car("BMW", 120);
// console.log(bmw);

///// with class declaration ::

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    // this.speed = this.speed + 10
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h `);
  }

  brake() {
    this.speed = this.speed - 5;
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

const mercedes = new Car("Mercedes", 95);
console.log(mercedes);

const arr = [1, 2, 3, 4];
console.log(arr);
