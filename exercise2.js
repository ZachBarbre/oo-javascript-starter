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
        return this.hand.reduce((acc, card) => {
            return acc + card.point;
        }, 0);
    }
}

class Deck {
    constructor(){
        this.deck = [];
        this.suits = ['spades', 'clubs', 'hearts', 'diamonds'];
        this.faces = ['Jack', 'Queen', 'King'];
        this.suits.forEach(suit => {
            for (let i = 1; i <= 10; i++){
                this.deck.push(new Card(i, suit));
            }
            this.faces.forEach(face => {
                this.deck.push(new Card(face, suit));
            });
        });
    }

    shuffle(){
        let shuffledDeck = [];
        while (shuffledDeck.length < this.deck.length){
            const index = Math.floor(Math.random()*52);
            if (shuffledDeck.includes(this.deck[index]) === false){
                shuffledDeck.push(this.deck[index]);
            }
        }
        this.deck = shuffledDeck;
    }

    draw(){
        return this.deck.pop();
    }
    
    numCardsLeft(){
        return this.deck.length;
    }
}

const myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
console.log(myHand.getPoints());
console.log(myHand.hand);

// const myDeck = new Deck();
// myDeck.shuffle();
// console.log(myDeck.deck);
