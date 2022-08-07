const express=require('express')
const app=express()

app.get('/weather',(req,res)=>{
    // console.log(req.query); 
    if(!req.query.address){
        return res.send({
            error:'there is no query string for address!'
        })
    }

    res.send({
        address:req.query.address
    })
    
})

app.listen(3000,()=>{
    console.log('server is start...');
})