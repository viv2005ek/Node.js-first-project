let cp = require("child_process"); //child process module

cp.execSync("calc"); //open calculator    
//more functions-->
//calc=> open calculator
//  notepad=>Opens the Notepad application,
//  mspaint=>Opens Microsoft Paint,
//  taskmgr=>Opens the Task Manager,
//  control=>Opens the Control Panel,
//  cmd=>Opens a new Command Prompt window,
//  explorer=>Opens File Explorer,
//  regedit=>Opens the Registry Editor.


cp.execSync("start chrome"); //open chrome

cp.execSync("start chrome https://github.com/viv2005ek"); //open this link on chrome

console.log("" + cp.execSync("node test.js")); //open this js  fil e   "" nesseary to convert node test.js output in string