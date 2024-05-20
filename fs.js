let fs = require("fs");

// Reading a file
let fileContent = fs.readFileSync("fs1.txt");
console.log("Data of file 1 -> " + fileContent); //+ required to convert fileContent data 'buffer' to string


// Writing a file
fs.writeFileSync("fs2.txt", "this is file2");
//it will overwrite the data means delete previous data and save this new data
//if no file present by this name then compiler will make a new file by the name and store this data in that



// Appending data to a file
fs.appendFileSync("fs3.txt", "this is appended data");
//it save new data but also contain previous data

// Deleting a file
fs.unlinkSync("fs4.txt");