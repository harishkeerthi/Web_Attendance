const exp = require("express")
const studentapiobj = exp.Router();
const app = exp();
const bodyparser = require("body-parser")
studentapiobj.use(bodyparser.json());
bcrypt = require("bcrypt")
const mc = require("mongodb").MongoClient
//import jsonwebtoken
const jwt=require("jsonwebtoken")
// connect projectdb
const mongourl = "mongodb://harish:harish@cluster0-shard-00-00-m7ixd.mongodb.net:27017,cluster0-shard-00-01-m7ixd.mongodb.net:27017,cluster0-shard-00-02-m7ixd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
var dbo;


mc.connect(mongourl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        dbo = client.db("projectdb")
        console.log("data base connected by student");
    })

// post req handler STUDENT REGISTRATION
studentapiobj.post('/save', (req, res) => {

    bcrypt.hash(req.body.password, 8, (err, hashedpassword) => {
        if (err) {
            console.log(err);
        }
        else { req.body.password = hashedpassword }


        dbo.collection("studentcollection").insertOne(req.body, (err, success) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json({ message: "studentpostsuccess" })
            }
        })
    })
})




/////////////////////////////////////////////////////////////////////
//facultylogin handler
studentapiobj.post('/save1', (req, res) => {
    dbo.collection("studentcollection").find({ name: req.body.name }).toArray((err, dataArray) => {
        if (err) {
            console.log(err);
        }
        else if (dataArray.length == 0) {
            res.json({ message: "invalid-username" })
        }
        else {
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


//get student details handler for faculty login view
studentapiobj.get('/read/:name',(req,res)=>{
    dbo.collection("studentattendance").find({name:(req.params.name)}).toArray((err,dataArray)=>{
       if(err) { console.log(err) }
       else{
        res.json({message:dataArray}) }
    })
 })


// export studentapi object
module.exports = studentapiobj