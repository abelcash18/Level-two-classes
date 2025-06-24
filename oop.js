// This is a simple example of an object in JavaScript

let user_one ={
    name: "Abel",
    age: 30,
    email: "josephabel@gmail.com",
    dob: "1993/05/15",
  }

let user_two ={
    name: "Daniel",
    age: 29,
    email: "daniel09@gmail.com",
    dob: "1996/04/15",
  }

let user_three ={
    name: "favour",
    age: 20,
    email: "favour87@gmail.com",
    dob: "2006/09/27",
  }

  let user_four ={
    name: "John",
    age: 26,
    email: "john209@gmail.com",
    dob: "1999/02/27",
  }

  let user_five ={
    name: "Samuel",
    age: 35 ,
    email: "samzy78@gmail.com",
    dob: "1990/09/27",
  }
// console.log(user_one);
// user_one.greet();
// console.log(user_two);
// console.log(user_three);
// console.log(user_four);
// console.log(user_five);
  // Function to display user information
  //four pillars of OOP
  // 1. Encapsulation -// Encapsulation Example
// class Person {
//   #ssn; // private field
//   constructor(name, ssn) {
//     this.name = name;
//     this.#ssn = ssn;
//   }
//   getSSN() {
//     return this.#ssn;
//   }
// }
// const person = new Person('Alice', '123-45-6789');
// console.log(person.name);      // Alice
// console.log(person.getSSN());  // 123-45-6789
// // console.log(person.#ssn);   // Error: private field
  // 2. Inheritance- // Inheritance Example
// class Vehicle {
//   move() {
//     console.log('Vehicle is moving');
//   }
// }
// class Car extends Vehicle {}
// const car = new Car();
// car.move(); // Vehicle is moving
  // 3. Polymorphism- // Polymorphism Example
// class Animal {
//   speak() {
//     console.log('Animal speaks');
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log('Dog barks');
//   }
// }
// class Cat extends Animal {
//   speak() {
//     console.log('Cat meows');
//   }
// }
// const animals = [new Dog(), new Cat()];
// animals.forEach(a => a.speak()); // Dog barks, Cat meows
  // 4. Abstraction -// Abstraction Example
// class Database {
//   connect() {
//     // Complex connection logic hidden
//     console.log('Connected to database');
//   }
//   query(sql) {
//     // Details hidden
//     console.log(`Running query: ${sql}`);
//   }
// }
// const db = new Database();
// db.connect();
// db.query('SELECT * FROM users');

  class User {
    constructor(name, age, email, dob) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.dob = dob;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    } 
  }

  const user1 = new User('Abel',"joosephabel@gmail.com", 30, '1993/05/15');
  


  class animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

    class Dog extends animal {
      speak() {
        console.log(`${this.name} barks.`);
      }
    }
    class Cat extends animal {
      speak() {
        console.log(`${this.name} meows.`);
      }
    }
    const dog = new Dog('Rex', '9months');
    const cat = new Cat('Whiskers', '11months');

    console.log(dog)

    dog.speak(); // Rex barks.
    cat.speak(); // Whiskers meows.