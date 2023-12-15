// console.log("practice 2");
//let myName=prompt("Enter your name:");
// console.log(myName);

//step:1 creat the function
function sum(){
    let num1=Number(prompt("Enter a number:"));
    let num2=Number(prompt("Enter a number:"));
    
    let total= num1+num2;
    
    document.getElementById("results").innerHTML=`<p> ${total} </p>`;

}
//step2: call/run



//step3: repeat

function Multiplication(){
    let num1=Number(prompt("Enter a number:"));
    let num2=Number(prompt("Enter a number:"));

    let total= num1*num2;

    document.getElementById("results").innerHTML=`<p> ${total} </p>`;
}