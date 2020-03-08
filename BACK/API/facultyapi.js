const exp=require("express")
const facultyapiobj=exp.Router();
const app=exp();
const bodyparser=require("body-parser")
facultyapiobj.use(bodyparser.json());
bcrypt=require("bcrypt")
const mc=require("mongodb").MongoClient
const jwt=require("jsonwebtoken")

// connect projectdb
const mongourl="mongodb://harish:harish@cluster0-shard-00-00-m7ixd.mongodb.net:27017,cluster0-shard-00-01-m7ixd.mongodb.net:27017,cluster0-shard-00-02-m7ixd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
var dbo;



mc.connect(mongourl,
    {useNewUrlParser:true,
    useUnifiedTopology:true},(err,client)=>{
    dbo=client.db("projectdb")
    console.log("data base connected by faculty");
    })
   

// post req handler  faculty registration
facultyapiobj.post('/save',(req,res)=>{
    bcrypt.hash(req.body.password,8,(err,hashedpassword)=>{
        if(err){console.log(err);
               }
        else{req.body.password=hashedpassword}
      dbo.collection("facultyregistercollection").insertOne(req.body,(err,success)=>{
        if(err)
           {
               console.log(err);
           }
        else
           {
               res.json({message:"success"})
           }
    })
})
})

// Get req handler
facultyapiobj.get('/read',(req,res)=>{
    dbo.collection("studentcollection").find().toArray((err,arrayoutput)=>{
        if (err) {
            console.log(err)
        }
       
            else{
                res.json({message:arrayoutput})
            }
    })
})

//  POST STUDENT ATTENDANCE INTO FACULTY D B
facultyapiobj.post('/attendance',(req,res)=>{
 dbo.collection("studentattendance").insertMany(req.body,(err,success)=>{
        if(err) { console.log(err) }
        else{
               res.json({message:"give alert"})
           }
    })

})




//login handler
facultyapiobj.post('/save1', (req, res) => {
    dbo.collection("facultyregistercollection").find({name:req.body.name}).toArray((err, dataArray) => {
        if (err) {
            console.log(err);
        }
        else if (dataArray.length == 0) {
            res.json({ message: "invalid-username" })
        }
        else if (dataArray.length !== 0) {
            bcrypt.compare(req.body.password, dataArray[0].password, (err, result) => {
                if (err) {
                    console.log(err);
                    
                }
                else if(result==false){
                   res.json({message:"invalid-password"})
                }
                else{
               var signedToken=jwt.sign({ name: req.body.name },'secretkey',{expiresIn:60})
               res.json({message:"success",token:signedToken})
                }   
            })
        }
    })

   })
//get student data handler
facultyapiobj.get('/read1',(req,res)=>{
    dbo.collection("studentattendance").find().toArray((err,arrayoutput)=>{
        if (err) {
            console.log(err)
        }
       
            else{
                res.json({message:arrayoutput})
            }
    })
})



//get student details handler for faculty login view
facultyapiobj.get('/getstudetails',(req,res)=>{
    dbo.collection("studentattendance").find({name:req.body.name}).toArray((err,arrayoutput)=>{
        if (err) {
            console.log(err)
        }
       
            else{
                res.json({message:arrayoutput})
            }
    })
})

// export studentapi object
module.exports=facultyapiobj