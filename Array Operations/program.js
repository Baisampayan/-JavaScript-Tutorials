/**
 *  Array Concat() Method
 */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
// Concating two arrays
console.log(arr1.concat(arr2));
// Concating more than two arrays
console.log(arr1.concat(arr2,arr3));


/**
 * Array indexOf() Method
 */
const arr4 = [10, 8, 2, 31, 10, 1, 65, 10];
// finding the first occurance of the element
console.log(arr4.indexOf(10));
// finding the index of the element after a specific position
console.log(arr4.indexOf(10, 2));
// Finding all the index of the element present in the array
const allIndex = [];
let tempIndex = arr4.indexOf(10);
while(tempIndex !== -1) {
    allIndex.push(tempIndex);
    tempIndex = arr4.indexOf(10, tempIndex+1);
}
console.log(allIndex);


/**
 * Array filter() Method
 */
// Displaying numbers for arr4 that are greater than 10
console.log(arr4.filter(num => num >10));

// Displaying names those length are greater than 10
const names = ["Liam", "Noah", "Oliver", "Elijah", "Charlotte", "Amelia", "Emma", "Olivia"];
console.log(names.filter(name => name.length > 5));

// Displaying numbers that are greater than 10 using function with array.filter()
const nums = [10, 8, 2, 31, 10, 1, 65, 10, 12, 5, 8, 130, 44];
function bigNumOnly(element) {
    return element > 10;
}
console.log(nums.filter(bigNumOnly));

// Find all prime numbers in an array
const mixNumbers = [-3, -2, -1, 0, 1, 2, 3, -8, 4, 5, 65, 6, 7, 8, 130, 9, 10, 44, 11, 12, 13];
function isPrime(value) {
    for(let i=2; value > i; i++) {
        if(value % i === 0) {
            return false;
        } else {
            return value > 1;
        }
    }
}
console.log(mixNumbers.filter(isPrime));

// Searching and showing the result with array.filter()
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, 'an'));

/**
 *  Array find() Method
 */
// Finding elements from the array names
const hasElement = names.find(function(element) {
    if(element === "Charlotte") {
        return true;
    } else {
        return false;
    }
});
if(!hasElement) {
    console.log("The Element is not present");
} else {
    console.log("The Element is present");
}

// Display all the even numbers from the array
const nums1 = [10, 8, 2, 31, 10, 1, 65, 10, 12, 5, 8, 130, 44];
let tempArr = [];
nums1.find((value) => {
    if(value%2 === 0) {
        tempArr.push(value);
    }
});
console.log(tempArr);

/**
 *  Array findIndex() Method
 */
// Displaying the position of the Number '1' in the array nums1
console.log(nums1.findIndex((element) => {
    return element === 1;
}));

// Displaying the position of the fruit 'cantaloupe' in the array fruits1
const fruits1 = ['apple', 'grapefruit', 'banana', 'cantaloupe', 'grapes', 'mango', 'blueberries', 'orange'];
console.log(fruits1.findIndex((fruit) => {
    return fruit === 'cantaloupe';
}));

// Displaying the position of first Odd Number in the array nums1
console.log(nums1.findIndex((element) => {
    return element%2 !== 0;
}));

/**
 *  Array forEach() Method
 */
// Displaying a multiplication Table
const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplier = 12;
table.forEach((element) => {
    console.log(element + ' x ' + multiplier + ' = ' + (parseInt(element*multiplier)));
});

// Display all the even numbers
tempArr = [];
nums1.forEach((ele) => {
    if(ele % 2 == 0) {
        tempArr.push(ele);
    }
});
console.log(tempArr);

/**
 * Array includes() Method
 */
// Checking if the fruit 'cantaloupe' is present in the array fruits1
console.log(fruits1.includes('cantaloupe'));

// Checking if the number '10' is present in the array nums1 after index - 5
console.log(nums1.includes(10, 5));

/**
 * Array map() Method
 */
// SquareRoot
console.log(nums1.map((element) => {
    return Math.sqrt(element)
}));

// Displaying a multiplication Table
const multiplier2 = 12;
table.map((element) => {
    console.log(element + ' x ' + multiplier + ' = ' + (parseInt(element*multiplier)));
});

// Doubling up the elements
console.log(nums1.map((elements) => elements*2 ));
console.log(nums1);