// const mom = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     eyeColor: 'brown',
//     hairColor: 'black'
// };

// let daughter = {
//     firstName: 'Ilene',
//     hairColor: 'brown'
// };

// daughter.__proto__ = mom;

// console.log(daughter.hairColor, daughter.eyeColor);

// console.log(daughter);


class Person {
    constructor(name){
        this.name = name;
        this.friends = [];
    }

    addFriend(friend){
        this.friends.push(friend);
    }

    createCreeting(other){
        return `Yo ${other.name}! From ${this.name}.`
    }
    
    greet(other) {
        console.log(this.createCreeting(other));
    }

    lazyGreet(other) {
        const self = this;
        setTimeout(function(){
            self.greet(other);
        }, 2000);
    }

    createGreetingsforFriends(){
        return this.friends.map(friend =>{
            return this.createCreeting(friend);
        })
    }

    greetFriends(){
        this.createGreetingsforFriends().forEach(friendString =>{
            console.log(friendString);
        })
    }
};

const me = new Person('Zach');
const jon = new Person('Jon');
const matt = new Person('Matt')
me.addFriend(jon);
me.addFriend(matt);

me.greetFriends();