// if statements

let yourName="Janaye";

if(confirm("Are you "+ yourName + "?")){
	console.log("Hello " + yourName);
}else{
	console.log("Then what is your name?");
}

console.log(1==1);//true
console.log(5==8);//false


// (==)-> comparing values , (===)->comparing values and data type
// example : (values match) (1)==(1) <- These are just numbers 
//            (when "" its in a string so its a data type) ie. ("1")<-this is a data type ==(1)<-this is a number.. together if using (==) this would be false because its comparing (==) values only
//
// console.log('1'==1);//false
// console.log('1'==='1');//true

// let num1 = 1;
// let num2 = 2;

// if(num1 < num2){
//	console.log("num1 is smaller than num2")
//}


//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrue = false;

//if(num1<num2 && num3>num2){
//	console.log("num1 is smaller than num2 AND num3 is larger than num2");
//}

//if(num1 == 1 || num2 == 1 || num3 == 1){
//	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
//}

//if(!notTrue){
//	console.log("not not true is true!");
//}

function login(){
	console.log("Hello")
	//create the DB variables for password and email
	let userDB="jrouser@sdgku.edu";
	let passDB="Test1234";

	// get the value from the user (prompt)
	let user = document.getElementById("txtUserName").value;
	let password = document.getElementById("txtPassword").value;
	console.log(user,password);
	// compare the DB values and the user's values 
	if(user===userDB && password==passDB){
		//display welcome message
		document.getElementById("notifications").innerHTML=`Welcome to the system ${user}`;
	}else{
		// display invalid credentials
		document.getElementById("notifications").innerHTML=`Invalid credentials!`;
		
	}
}

function register(){

    let student = document.getElementById("txtStudent").value;


    document.getElementById("studentsList").innerHTML+=`<li>

        ${student}</li>`;

}