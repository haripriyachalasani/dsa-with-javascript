// Goal:
// Understand the time complexity of printing a string multiple times

// Problem:
// Print the word "coder" starting from i = 5 until i < n

let i = 5; // Initialization (runs only once)

while (i < n) {
  console.log("coder"); // Runs once per loop iteration
  i++;                 // Increments i by 1 each iteration
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Explanation:
// 1. The loop starts with i = 5 and continues until i becomes equal to n.
// 2. The loop runs (n - 5) times.
// 3. Each loop iteration performs constant-time operations:
//    - Printing a string
//    - Incrementing a variable
// 4. Since the number of iterations grows linearly with n,
//    the overall time complexity is O(n).

