const weatherFunc=require('./utils/weather-api');
const geoCoding=require('./utils/geocoding-api');


const location='mumbai';
geoCoding(location,(response,error)=>{
    if(response===undefined){
        console.log(error);
        return;
    }
    const latitude=response[0].lat;
    const longitude=response[0].lon;
    
    weatherFunc(latitude,longitude,(res,err)=>{
        if(res===undefined){
            console.log(err);
            return;
        }
        console.log(`It is currently ${res.current.temperature} degress out. It feels like ${res.current.feelslike} degress out`);
    })
})
