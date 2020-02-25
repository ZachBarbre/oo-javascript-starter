// function Person(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }

// Person.prototype.greet = function(other) {
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!');
// };

// Person.prototype.contactInfo = function() {
//     console.log(`email: ${this.email}, phone: ${this.phone}`);
// }

// const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// sonny.greet(jordan);
// jordan.greet(sonny);

// sonny.contactInfo();
// jordan.contactInfo();

class Card {
    constructor(point, suit){
        this.point = point;
        this.suit = suit;
    }
    getImageUrl(){
        return `images/${this.point}_of_${this.suit}.png`;
    }
}

class Hand {
    constructor(){
        this.hand = [];
    }
    addCard(card) {
        this.hand.push(card);
    }
    getPoints(){
        /// finish this
    }
}