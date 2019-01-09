

class Account{
	constructor(){
		//store the amount of money in the account
		this.amount = null;
	}
	add( addAmount ){
		//add money to the amount stored in the account
		this.amount+=addAmount;
		return this.amount;
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( removeAmount ){
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		if(removeAmount>this.amount){
			this.newAmount=this.amount;
			this.amount-=this.newAmount
			return this.newAmount;
		}else{
			this.amount-=removeAmount;
			return removeAmount;
		}
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.amount;
		//returns the amount in the account
	}
}