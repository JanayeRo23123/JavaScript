/* Print all the numbers from 1 to 10. */
const listNumberContainer = document.getElementById("list-numbers");

for (let i=1; i<11; i++) {
    listNumberContainer.innerHTML += `<li> ${i} </li>`
}

/* Print all the numbers from 10 to 1. */

const listNumberReverseContainer = document.getElementById("listNumbersReverse")

for (let i=10; i >= 1; i--) {
    listNumberReverseContainer.innerHTML += `<li> ${i} </li>`
}



/* Print all the even numbers from 1 to 10. */
/*2
4
6
8
10*/

const listEvenNumbersContainer = document.getElementById("listEvenNumbers")

for (let i=2; i<10; i+=2) {
    listEvenNumbersContainer.innerHTML += `<li> ${i} </li>`
}


/* Print the multiplication table for 5, from 1 to 100. */

const listMultiplicationTableContainer = document.getElementById("listMultiplicationTable")

for (let i=1; i<101; i++) {
    let result= 5*i; 

    listMultiplicationTableContainer.innerHTML += `<li> 5 x ${i} = ${result} </li>`
}