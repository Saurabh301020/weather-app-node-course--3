const weatherFunc=require('./utils/weather-api');
const geoCoding=require('./utils/geocoding-api');
const express=require('express')
const app=express()

app.get('/weather',(req,res)=>{
    // console.log(req.query); 
    if(!req.query.address){
        return res.send({
            error:'there is no query string for address!'
        })
    }
    geoCoding(req.query.address,(response,error)=>{
        if(response===undefined){
            res.send({error:error})
            return
        }
        const latitude=response[0].lat;
        const longitude=response[0].lon;
        weatherFunc(latitude,longitude,(re,er)=>{
            if(re===undefined){
                res.send({error:er})
                return
            }
            res.send({
                currentTemp:re.current.temperature,
                feelsTemp:re.current.feelslike
            })
        })
    })

    // res.send({
    //     address:req.query.address
    // })
    
})

app.listen(3000,()=>{
    console.log('server is start...');
})