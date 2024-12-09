// QS-1

function calculateDifference(a, b) {
    return a - b;
}

console.log(calculateDifference(20,5));

// QS-2

function isOdd(number) {
    return number % 2 !== 0;
}

console.log(isOdd(15));

// QS-3

function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

console.log(findMin([3, 5, 1, 8, 2]));

// QS-4

function filterEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6,7,8,9,10]));

// QS-5

function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 2, 5, 9]));

// QS-6

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));

// QS-7

function findAverage(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum / numbers.length;
}

console.log(findAverage([10, 20, 30, 40]));

// QS-8

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900)); 










