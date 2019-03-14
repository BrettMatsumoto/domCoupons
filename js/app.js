//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

var newDis = document.getElementById('disclaimer');
newDis.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
var newBrand1 = document.getElementById('brand1');
newBrand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

var newItem1 = document.getElementById('item1');
newItem1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
var newPrice1 = document.getElementById('price1');
newPrice1.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
var newDiscount1 = document.getElementById('discount1');
newDiscount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
var newItem2 = document.createElement('div');
newItem2.id = 'item2';
newItem2.innerHTML = "Hendrick's Gin";
brand2.appendChild(newItem2)

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var newPrice2 = document.createElement('div');
newPrice2.id = 'price2';
newPrice2.innerHTML = '$34.99';
brand2.appendChild(newPrice2)


//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var newDisc3 = document.createElement('button');
newDisc3.id = 'discount3';
newDisc3.innerHTML = '50% OFF Axe body soap!';
var loc3 = document.getElementsByClassName('block3');
loc3[0].appendChild(newDisc3);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

var newitem3 = document.getElementsByClassName('item');
newitem3[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var newDiscount2 = document.createElement('button');
newDiscount2.className = 'discount';
newDiscount2.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
var pandLoc = document.getElementsByClassName('block1');
pandLoc[1].appendChild(newDiscount2);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

var newBrand2 = document.getElementsByClassName('brand');
newBrand2[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
var newPrice3 = document.getElementsByClassName('price');
newPrice3[1].innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var newBrand3 = document.createElement('div');
newBrand3.className = 'brand';
newBrand3.innerHTML = 'Hifiman Shangri-La';
var headLoc = document.getElementsByClassName('block3');
headLoc[1].appendChild(newBrand3)

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
var newItem4 = document.createElement('div');
newItem4.className = 'item';
newItem4.innerHTML = 'Electronstatic Headphones';
headLoc[1].appendChild(newItem4);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
var newPrice4 = document.createElement('div');
newPrice4.className = 'price';
newPrice4.innerHTML = '$18,000';
headLoc[1].appendChild(newPrice4);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var newButt = document.createElement('button');
newButt.className = 'discount';
newButt.innerHTML = 'Free Barry Manilow CD with purchase!';
headLoc[1].appendChild(newButt);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

//Final Boss 
//Create your own product for the last three sections.
