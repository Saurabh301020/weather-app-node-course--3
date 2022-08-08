const path=require('path')
const weatherFunc=require('./utils/weather-api');
const geoCoding=require('./utils/geocoding-api');
const express=require('express')
const app=express()
const hbs=require('hbs')

const viewPaths=path.join(__dirname,'/templates/views')
const partialsPath=path.join(__dirname,'/templates/partials')
const staticPath=path.join(__dirname,'/public')

app.use(express.static(staticPath))

app.set('view engine','hbs')
app.set('views',viewPaths)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Saurabh'
    })
})
app.get('',(req,res)=>{
    res.send('this is from server!')
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Saurabh'
    })
})

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