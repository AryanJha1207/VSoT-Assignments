let str = prompt("Please Enter the Torrent File Name Below: ");
let str1 = str.trim();
let str2 = str1.toLowerCase();

// Q1 - Trimming the string and printing the string and its length
console.log("Cleaned String: ",str.trim())
console.log("Length of String",str.length)

// Q2 - Converting the Cleaned String to Uppercase and Lowercase
console.log("String in UpperCase: ",str1.toUpperCase())
console.log("String in LowerCase",str1.toLowerCase())

// Q3 - Extracting some Word From Between the Text 
console.log("Substring: ",str.substring(6,17)) // Keep the indexes from i to n+1
console.log("Sliced String: ",str.slice(6,17)) // Keep the indexes from i to n+1

// Q4 - check whether the Query Contains (functions,arrow and life)
console.log("The Query Contains Functions: ",str2.includes("functions")); // Checks whether the Query Contains "functions"
console.log("The Query Contains Arrow: ",str2.includes("arrow")); // Checks whether the Query Contains "arrow"
console.log("The Query Contains Life: ",str2.includes("life")); // Checks whether the Query Contains "life"

// Q5 - Printing character at some specific index and its ASCII value
console.log("Char at i'th index: ",str.charAt(9)) // Prints character at index i
console.log("ASCII Value: ",str.charCodeAt(9)) // prints ASCII value of character at index i

// Q6 - Performing a Case Sensitive Check for word "javascript"
console.log("Case Sensitive Check for \"javascript:\"",str2.includes("javascript"))