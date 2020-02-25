/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    static introduce (person){
        console.log(`This is ${person.name}. They are ${person.age}`);
    }

    describe(){
        console.log(`${this.name}, ${this.age} years old`)
    }

    sayHello(other){
        console.log(`Hello ${other.name}, I'm ${this.name}`);
    }

}

const me = new Person('Zach', 36);
const kira = new Person('Kira', 32);
console.log(me);
me.describe();
me.sayHello(kira);

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

class Teacher extends Person {

    teach(subject){
        console.log(`${this.name} teaches ${subject}`);
    }
}

const sean = new Teacher('Sean', 44);
sean.teach('JavaScript');
sean.describe();
Person.introduce(sean);

// class Teacher extends Person {
//     constructor (name, age, subject){
//         super(name, age);
//         this.subject = subject;
//     }

//     teach(){
//         console.log(`${this.name} teaches ${this.subject}`);
//     }
// }

// const sean = new Teacher('Sean', 44, 'JavaScript');
// sean.teach();