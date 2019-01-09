

class Bank{
	constructor(bankName){
		//takes in the name of the bank.
		this.bankName=bankName;
		//makes an object to store all accounts into
		this.accounts={};
	}
	makeAccount( createAccount ){
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
		if(this.accounts.hasOwnProperty(this.createAccount)){
			return false;
			}
		this.accounts[createAccount] = new Account();
		return this.accounts[createAccount];
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount( checkAccount ){
		//checks if an account exists or not
		this.checkAccount=checkAccount;
		if(this.accounts.hasOwnProperty(this.checkAccount)){
			return true;
		}else{
			return false;
		}
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( deleteAccount ){
		//removes an account
		//takes in an account number
		this.deleteAccount = deleteAccount;
		//if the account doesn't exist, returns
		if(!this.accounts.hasOwnProperty(this.deleteAccount)){
			return 'account ' + this.deleteAccount + ' does not exist';
		}
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
		if(this.accounts[deleteAccount].getAmount()>0){
			return 'account is not empty';
		}
			//'account is not empty'
		delete this.accounts[deleteAccount];
		//otherwise deletes the account from the constructor storage
		//returns 
		return 'account ' + this.deleteAccount+ ' deleted';

	}
	deposit( depositMoney, amountCash ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
		this.depositMoney=depositMoney;
		if(!this.accounts.hasOwnProperty(this.depositMoney)){
			return 'account does not exist';
		}
			//'account does not exist'
		this.accounts[depositMoney].add(amountCash);
		return 'account ' + this.depositMoney + ' now has '+ this.accounts[depositMoney].getAmount();
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( withdrawMoney, withdrawAmount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
		this.withdrawMoney=withdrawMoney;
		if(!this.accounts.hasOwnProperty(this.withdrawMoney)){
			return 'account does not exist';
		}
		
		return 'removed '+this.accounts[withdrawMoney].remove(withdrawAmount)+' from account '+this.withdrawMoney+". It now has "+ this.accounts[withdrawMoney].getAmount();
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}