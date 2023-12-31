import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import 'dotenv/config'
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set(app.set("view engine", "ejs"));
app.use(bodyParser.urlencoded({extended:true}));


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_CONNECT_URI);
  console.log("connected")
}

const emailschema = new mongoose.Schema(
  {
    name: {
      type:String,
      required: [true,"message"]
    },
    email: {
        type:String,
        required: [true,"message"]
      },
    message: {
        type:String,
        required: [true,"message"]
      },
  },
  { versionKey: false }
);
const messages = mongoose.model("newmessage", emailschema);
app.get("/", (req, res) => {
    
    res.render("index.ejs")
});
app.get("/aboutme", (req, res) => {
    res.render("aboutme.ejs")
});

app.get("/services", (req, res) => {
    res.render("services.ejs")
});

app.get("/contactme", (req, res) => {
    
    res.render("contactme.ejs")
});

app.post("/contactme", (req, res) => {
   const name1=req.body['Name'] 
   const email1=req.body['Email'] 
  const message1=req.body['Message']

  const client = new messages({
    name:name1,
    email:email1,
    message:message1
  });
  client.save();
  res.redirect("/contactme")
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
