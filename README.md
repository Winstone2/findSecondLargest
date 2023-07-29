# findSecondLargest
To find the second-largest number in an array of numbers, we can follow a simple approach. We initialize two variables to keep track of the largest and second-largest numbers. We then iterate through the array, updating these variables accordingly as we find larger numbers.
Thought Process:

    The function findSecondLargest takes an array arr as input.
    We first check if the array has at least two elements. If it has less than two elements, there is no second-largest number, so we return undefined.
    We initialize two variables, largest and secondLargest, to keep track of the largest and second-largest numbers found so far. We assume that the first element is the largest and the second element is the second-largest initially.
    To ensure that largest is always greater than or equal to secondLargest, we check if secondLargest is greater than largest, and if so, we swap their values using array destructuring.
    We then iterate through the rest of the array starting from the third element (index 2) and compare each element with largest and secondLargest.
    If the current element is greater than largest, we update secondLargest to be the previous value of largest, and update largest to be the current element.
    If the current element is greater than secondLargest and not equal to largest, we update secondLargest to be the current element.
    After iterating through the array, the secondLargest variable will hold the second-largest number, which is returned by the function.

Edge Cases to Consider:

    Empty Array: If the input array is empty, there are no numbers to find, so we return undefined.
    Array with Less than Two Elements: If the input array has less than two elements, there is no second-largest number, so we return undefined.
    Duplicate Numbers: If the array contains duplicate numbers, the function should still find the correct second-largest number without considering duplicates as separate values.
    In this example, the findSecondLargest function correctly identifies the second-largest number in the array [10, 20, 5, 30, 15] as 20.
