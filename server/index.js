const express = require('express');
const cors = require('cors');
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials:true,
  optionSuccessStatus:200,
};

//middleware setup
app.use(express.json());
app.use(cors(corsOptions))



const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jimwvxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {

    const jobCollection = client.db("soloSphere").collection("jobs");
    const bidCollection = client.db("soloSphere").collection("bids");

    app.get("/jobs", async(req,res)=>{
        const result = await jobCollection.find().toArray();
        res.send(result);
    })
    app.get("/jobs/:id", async(req,res)=>{
        const result = await jobCollection.findOne({_id: new ObjectId(req.params.id)});
        res.send(result);
    })
    app.get("/jobs/:email", async(req,res)=>{
        const result = await jobCollection.find({ "buyer.email": req.params.email }).toArray();
        res.send(result);
    })

     app.post("/jobs", async (req, res) => {
       const result = await jobCollection.insertOne(req.body);
       res.send(result);
     });





    app.post("/bids", async(req,res)=>{
      const result = await bidCollection.insertOne(req.body);
      res.send(result)
    })

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);





app.get("/",(req,res)=>{
    res.send("I am from Home route")
})


app.listen(port, ()=>{
    console.log(`Server is running at : http://localhost:${port}`);
})