

class RandomGenerator{
	constructor(min, max){ 
		//takes in the minimum and maximum values
		this.min=min;
		this.max=max;
		//if they are not defined, it sets the minimum to 1, and the max to 10
		if(this.min==false && this.max==false){
			this.min=1;
			this.max=10;
		}
		this.randomNumber;
		//makes storage for the random number
	}
	generate(){
		//make a random value between the minimum and maximum values
		this.randomNumber=Math.floor(Math.random()*this.max)+this.min;
		//and store the number into the storage from the constructor
	}
	getRange(){
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
		this.minMax = {min:this.min, max:this.max};
		return this.minMax;
	}
	getNum(){
		//return the random number that was generated by generate()
		return this.randomNumber;
	}
}