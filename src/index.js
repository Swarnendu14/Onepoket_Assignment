const express=require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res)=>{console.log('Hello world!');
res.status(200).json({status:true,message: 'Hello world!'})});

const port=3000;

app.listen(port,()=>{console.log(`listening on port ${port}`)});