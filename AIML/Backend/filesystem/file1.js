const fs= require('fs');
//const data = fs.readFileSync("./data.txt");
//console.log(data.toString()); //to convert into string
//fs.writeFileSync("./data3.txt", "Hello this is my new work", "utf-8");
//fs.appendFileSync("./data1.txt", "Work from another file","utf-8");

//fs.renameSync("./data3.txt","./data5.txt");



const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data); 
if(data.match("H")){
    console.log("H is found");
    const newdata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8");
}