const axios = require('axios')
// ---------weather api complete-------------

const weatherFunc=async(latitude,longitude,callBackfunc)=>{
    try {
        const res=await axios.get(`http://api.weatherstack.com/current?access_key=37df30cafde4731f312e687232100897&query=${latitude},${longitude}`)
        const data=res.data;
        if(data.error){
            const err='Please specify a valid location.'
            callBackfunc(undefined,err)
        }
        else{
            callBackfunc(data,undefined)
        }
        
    } 
    catch (erro) {
        const err='We are unable to connect to weather api!';
        callBackfunc(undefined,err)
    }

}
// weatherFunc(latitude,longitude,(response,error)=>{
//     if(response===undefined){
//         console.log(error);
//     }
//     else{
//         console.log(`It is currently ${response.current.temperature} degress out. It feels like ${response.current.feelslike} degress out`);
//     }
// })

module.exports=weatherFunc;