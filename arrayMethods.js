//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a) { total *= a; })
console.assert(total === 24)

// ----------------------------
// write your own reduce()
// that takes an array and a function
// ----------------------------


//make a function that takes an array as input and outputs a single number that adds all the numbers inside




function reduce(array, callback) {
    var result = array[0]
    for (var i = 0; i < array.length - 1; i++) {
        result = callback(result, array[i + 1])
    }
    return result
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(accumulator, element) {
        return accumulator * element
    }) === 24
)
console.assert(
    reduce([1, 2, 3, 4], function(accumulator, element) {
        return accumulator + element
    }) === 10
)



// ----------------------------
// write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }
    return result
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v) {
    return v * v
})
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        var minResult = callback(array[i])
        if (minResult === true) {
            result.push(array[i])
        }
    }
    return result
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v) {
    return v % 2 === 0
})
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)


// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    { name: "Matt", alma_mater: "Univ of Texas - Austin" },
    { name: "Brian", alma_mater: "Texas A&M" },
    { name: "Jesse", alma_mater: "Univ of Texas - Austin" },
    { name: "Justin", alma_mater: "Univ of Florida" }
]

people.sort(function(a, b) {
    // YOUR CODE HERE
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
})

// tests
// ---
console.assert(people[0].name === "Brian")
console.assert(people[1].name === "Jesse")
console.assert(people[2].name === "Justin")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs' },
    { first: 'John', last: 'Smith' },
    { first: 'Dave', last: 'Jones' },
    { first: 'Jack', last: 'White' }
]

var results = customers
    .filter(function(item) {
        // YOUR CODE HERE
        return item.first[0] === 'J'
    })
    .map(function(obj) {
        obj.fullname = obj.first + ' ' + obj.last
       return obj
    })
    .sort(function(a,b) {
    var nameA = a.fullname.toUpperCase(); // ignore upper and lowercase
    var nameB = b.fullname.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;

    })

console.log(results)

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")
