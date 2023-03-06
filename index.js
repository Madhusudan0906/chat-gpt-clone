require("dotenv").config();
const cors = require("cors");
const express= require("express");


const app = express();

app.use(cors());
app.use(express.json());


// const prompt = require('prompt-sync')();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function search(keyword){

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${keyword}`,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response.data.choices[0].text;
}

    // let text=prompt('type query:');
app.get("/",(req,res)=>{
    res.send({message:"hello world!"});
})
    
app.post("/search",async(req,res)=>{
    try{
        let text = req.body.prompt;
        let data=await search(text);
        res.send({"data":data});
    }catch(e){
        res.status(500).send({"message":"error",e})
    }
    

})

app.listen(process.env.port,()=>{
    console.log("server listening at port no "+process.env.port);
});