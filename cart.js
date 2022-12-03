///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const totalPrice = cart.reduce((num1, num2) => num1 + num2.price, 0)

console.log(totalPrice)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalPrice = cartTotal + (cartTotal * tax) - couponValue
    return finalPrice
}

console.log(calcFinalPrice(10, 1, .05))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    name: string //we want to know who they are (string because the value will be a name)
    trips: number //we want to know how many times the customer has come to the restraurant (number because we want to see the number of how many times they have come to the restaurant)
    days: number //This would be the number of days since the last time the customer came to the restraurant. This would be good information to have to see if you have lost customers around a certain amount of days back (number because we want to use it in calculations)
    food: array //This would display a list of all of the items the customer has ordered. This could help you know what your most popular dishes are (array so that we can continue to add items to a long list)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const newCustomer = {
    name: "Koy Dibb",
    trips: 10,
    days: 365,
    food: ["Meat Lovers", "Spicy", "Gluten Cheese"]
}
