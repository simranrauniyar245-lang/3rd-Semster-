const fs1=require("fs");
//fs1.writeFile("student.txt","This is a student file of CSE 33",(err)=>{
//if(err){
  //  console.log("err");
//}
//else{
   // console.log("file successfully created");
//}
//});

//reading a content of a file
fs1.readFile("student.txt",ugf8,(err,data))=>{
    if(err) throw err
    else{
        console.log("read a file content");
        console.log("data,")
    }

}