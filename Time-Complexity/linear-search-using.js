// Problem: 
// Given an array arr of size n and a target value k, determine whether k exists in the array.
// If the element is found, print "found". Otherwise, print "not found".

let i=0; 
let j=0;

while (i<n){
    if (arr[i]==k){
        console.log("found");
        j=1;
    }
    i++;
}

if (j==0){
    console,log("Not found");
}

// Time Complexity: O(n)  in the worst case when the element is not present

// Explanation:
// 1. The loop iterates through each element of the array once, resulting in n iterations.
// 2. Each iteration involves a constant-time comparison operation to check if the current element matches the target value k.
// 3. In the worst-case scenario, where k is not present in the array, the loop will complete all n iterations before concluding that the element is not found.
// 4. Therefore, the overall time complexity is O(n).

// Time Complexity: Omega(1)  in the best case when the element is present at the first position

// Explanation:
// 1. In the best-case scenario, the target value k is found at the first position of the array.
// 2. The loop will execute only once, performing a single comparison operation.
// 3. Since this involves a constant amount of work regardless of the size of the array, the time complexity in this case is Omega(1).

// Time Complexity: Theta(n)  in the average case

// Explanation:
// 1. On average, if the target value k is equally likely to be at any position in the array, the loop will need to check about half of the elements before finding k or concluding it's not present.
// 2. This results in approximately n/2 iterations on average.
// 3. Since constant factors are ignored in Big Theta notation, the average-case time complexity is Theta(n).