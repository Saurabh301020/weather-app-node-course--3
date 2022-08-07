const axios=require('axios')
//---------longnitude and latitude api

const geoCoding=async(location,callBackFunction)=>{
    try {
        const res=await axios.get(`https://geocode.maps.co/search?q=${location}`)
        const data=res.data;
        if(data.length===0){
            const err='Please provide correct location'
            callBackFunction(undefined,err)
        }
        else{
            callBackFunction(data,undefined)
        }
    }
    catch (erro) {
        const err='We are unable to connect to weather api!'
        callBackFunction(undefined,err)
    }

}
// geoCoding(location,(response,error)=>{
//     if(response===undefined){
//         console.log(error);
//     }
//     else{
//         console.log(response[0].lat,response[0].lon);
//     }
// })
module.exports=geoCoding;