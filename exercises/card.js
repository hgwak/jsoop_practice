
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cardStorage = [];
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		var newCard = new Card(suit,faceValue);
		this.cardStorage.push(newCard);
		//returns the amount of cards currently stored
		return this.cardStorage.length;
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		//gets the current amount of cards stored
		this.currentCards = this.cardStorage.length;
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.currentCards;
	}
	dealCards(	amountToDeal  ){
		//deals out a number of cards
		this.dealtCards=[];
		for(var i = 1; i <=amountToDeal; i++){
		var dealtCard=this.cardStorage.pop();
		this.dealtCards.push(dealtCard);
		dealtCard=null;
			if(this.cardStorage.length===0){
				return this.dealtCards;
			}
		};
		return this.dealtCards;

		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}