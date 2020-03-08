const exp=require("express")
const adminapiobj=exp.Router();

const bodyparser=require("body-parser")
adminapiobj.use(bodyparser.json());
bcrypt=require("bcrypt")
const mc=require("mongodb").MongoClient


// connect projectdb
const mongourl="mongodb://harish:harish@cluster0-shard-00-00-m7ixd.mongodb.net:27017,cluster0-shard-00-01-m7ixd.mongodb.net:27017,cluster0-shard-00-02-m7ixd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
var dbo;



mc.connect(mongourl,
    {useNewUrlParser:true,
    useUnifiedTopology:true},(err,client)=>{
    dbo=client.db("projectdb")
    console.log("data base connected by admin");
    })


//   read

       adminapiobj.get('/read',(req,res)=>{
        dbo.collection("studentcollection").find().toArray((err,arrayoutput)=>{
            if (err) {
                console.log(err)
            }
           
                else{
                    res.json({message:arrayoutput})
                }
        })
    })


    // admin assigns id number to students and save into d b
    adminapiobj.post('/fromadmin',(req,res)=>{
        
        dbo.collection("admin").insertMany(req.body,(err,success)=>{
        
            if(err)
              {
                  console.log("error during insert",err)
             }
            else{
                        res.json({message:"success"})
                   }
                  

              
        })
        
    })
    

// export adminapi object
module.exports=adminapiobj;
   
