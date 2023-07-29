function findSecondLargest(arr) {
    if (arr.length < 2) {
        return undefined; // The array should have at least two elements to find the second-largest number
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        // Swap the values if necessary, so largest >= secondLargest
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        const currentNumber = arr[i];

        if (currentNumber > largest) {
            // Update largest and secondLargest accordingly
            secondLargest = largest;
            largest = currentNumber;
        } else if (currentNumber > secondLargest && currentNumber !== largest) {
            // Update secondLargest only if it's greater than the currentNumber and not equal to largest
            secondLargest = currentNumber;
        }
    }

    return secondLargest;
}
const numbers = [10, 20, 5, 30, 15];
const secondLargestNumber = findSecondLargest(numbers);

console.log(secondLargestNumber); // Output: 20
