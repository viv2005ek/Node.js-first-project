let fs = require("fs");

// Reading a file
let fileContent = fs.readFileSync("fs1.txt");
console.log("Data of file 1 -> " + fileContent);

// Writing a file
fs.writeFileSync("fs2.txt", "this is file2");

// Appending data to a file
fs.appendFileSync("fs3.txt", "this is appended data");

// Deleting a file
fs.unlinkSync("fs4.txt");