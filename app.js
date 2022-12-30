let user = prompt("Enter Quantity of chiken in grams the price of chicken per kg =500kg ");


let convert_quantity = user / 1000;
let  price = convert_quantity  * 500;
document.write("you have to pay - " + price + " Rupees")