
//variables declared in the same statement
var price = 5;
var quantity = 14;
var total = price * quantity;

/*
 Three variables are declared on the same line then values assigned to them
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/*
Two variables are declared and assigned values on the same line 
then one is declared and assigned a vlaue on the next line
var price = 5, quantity = 14;
var total = price * quantity;
*/


/*
Variable is used to hold a reference to an element in the HTML page
This allows you to work directly with the element stored in the variable.
*/

//Write total into the element with id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total;
