///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: "Meat Lovers",
    price: 10,
    category: "Meat",
    popularity: 9,
    rating: 7.5,
    tags: ["Pepperoni", "Sausage", "Ham", "Bacon"]
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

const {price: newPrice} = pizza

console.log(newPrice)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const {category: newCategory} = pizza

console.log(newCategory)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const foodArr = [
    {
        name: "Meat Lovers",
        price: 10,
        category: "Meat",
        popularity: 9,
        rating: 7.5,
        tags: ["Pepperoni", "Sausage", "Ham", "Bacon"]
    },
    {
        name: "Pepperoni",
        price: 7,
        category: "One Topping",
        popularity: 10,
        rating: 6,
        tags: ["Pepperoni", "Cheese"]
    },
    {
        name: "Spice Lover",
        price: 9,
        category: "Spicy",
        popularity: 8,
        rating: 8,
        tags: ["Pepperoni", "Spicy Sausage", "Red Pepper", "Jalepeno"]
    },
    {
        name: "Ranch n Stuff",
        price: 11,
        category: "Speciality",
        popularity: 9,
        rating: 9.5,
        tags: ["Chicken", "Bacon", "Special Ranch"]
    },
    {
        name: "Gluten Cheese",
        price: 2,
        category: "Healthy?",
        popularity: 2,
        rating: 2,
        tags: ["Goat Chees", "Gluten Free", "Feta", "Parmesean"]
    },
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/


const filteredFood = foodArr.filter(cb => cb.tags.includes("Pepperoni"))

// console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filterByProperty = (property, number, type) => {
    if (type === "above") {
        if (property === "price") {
            return foodArr.filter(cb => cb.price > number) 
        } else if (property === "popularity") {
            return foodArr.filter(cb => cb.popularity > number) 
        } else if (property === "rating") {
            return foodArr.filter(cb => cb.rating > number) 
        } else {
            console.log("Property must be price, popularity or rating")
        }
    } else if (type === "below") {
        if (property === "price") {
            return foodArr.filter(cb => cb.price < number) 
        } else if (property === "popularity") {
            return foodArr.filter(cb => cb.popularity < number) 
        } else if (property === "rating") {
            return foodArr.filter(cb => cb.rating < number) 
        } else {
            console.log("Property must be price, popularity or rating")
        }
    } else {
        console.log("Type must be above or below")
    }
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

console.log(filterByProperty("price", 8, "above"))
// console.log(filterByProperty("price", 8, "below"))
// console.log(filterByProperty("rating", 8, "above"))
// console.log(filterByProperty("popularity", 8, "below"))