const express=require('express');

const app = express();

app.use(express.json());

app.use('/',(req,res)=>{
    const array=[2,6,14,67,11,7,23,21,1];
    let sumOfArrayElements=0;
    console.log("Array elements => "+array);
    for(let i=0; i<array.length; i++)
    {
        sumOfArrayElements+=array[i];
    }
    console.log("Sum of all the array elements =>"+sumOfArrayElements);
    res.status(200).send({status:true,Array:array,ArrayElementsSum:sumOfArrayElements});
})
const PORT=3000;
app.listen(PORT,()=>{console.log('listening on port '+PORT)})