
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator;
		this.numbers = [];
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		
		//takes in the operator
		//checks if it is a valid operation (+-*/)
		if(operator === '+' || operator==="-"||operator=== '*'||operator==="/"){
			this.operator = operator;
			return true;
		}
		return false;
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( aNumber ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		if(typeof aNumber === 'number' && this.numbers.length < 1){
			this.numbers.push(aNumber);
			return this.numbers.length;
		}
		if(typeof aNumber === 'number' && this.numbers.length<2){
			this.numbers.push(aNumber);
			return this.numbers.length;
		}
		return false;
		
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		switch(this.operator){
			case '+':this.result=this.numbers[0] + this.numbers[1];
			break;
			case '-':this.result=this.numbers[0] - this.numbers[1];
			break;
			case '*':this.result=this.numbers[0] * this.numbers[1];
			break;
			case '/':this.result=this.numbers[0] / this.numbers[1];
			break;
		}
		
		this.numbers=[];
		return this.result;
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}