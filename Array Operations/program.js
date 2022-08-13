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