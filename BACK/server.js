//  creat mini express app
const exp=require("express")
const app=exp();
const path=require("path")
app.use(exp.static(path.join(__dirname,'../dist/project')))

// import student mini app object
const studentapi=require('./API/studentapi');
const facultyapi=require('./API/facultyapi')
const adminapi=require('./API/adminapi')

// using
app.use("/student",studentapi);
app.use("/faculty",facultyapi)
app.use("/admin",adminapi)




// assign port number
const port=7000
app.listen(port,()=>{ console.log("server listening on 7000");
 })