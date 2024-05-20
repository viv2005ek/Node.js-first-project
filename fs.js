// // Reading a file
// let fileContent = fs.readFileSync("fs1.txt");
// console.log("Data of file 1 -> " + fileContent); //+ required to convert fileContent data 'buffer' to string


// // Writing a file
// fs.writeFileSync("fs2.txt", "this is file2");
// //it will overwrite the data means delete previous data and save this new data
// //if no file present by this name then compiler will make a new file by the name and store this data in that



// // Appending data to a file
// fs.appendFileSync("fs3.txt", "this is appended data");
// //it save new data but also contain previous data

// // Deleting a file
// fs.unlinkSync("fs4.txt");



let fs = require("fs");
//create a direcotry
// fs.mkdirSync("newDirectory");

//check the content inside of directory
let dir_path = "C:\\Users\\Vivek\\VsCode\\newDirectory"; //path should have-> //   replace / with //

//read the files name of directory
let folder_content = fs.readdirSync(dir_path);
console.log("content->", folder_content);

//does directory or file exist or not
let doesExist = fs.existsSync("./newDirectory"); //works for both file and directory
console.log(doesExist);


//remove directory
fs.rmdirSync("newDirectory")