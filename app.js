
const axios = require('axios')
axios.get('https://geocode.maps.co/search?q=toronto')
.then((res)=>{
    // console.log(res.data[0].lat,res.data[0].lon);
axios.get(`http://api.weatherstack.com/current?access_key=37df30cafde4731f312e687232100897&query=${res.data[0].lat},${res.data[0].lon}`)
.then((res)=>{
    // console.log(res.data.current.temperature,res.data.current.feelslike);
    console.log(`It is currently ${res.data.current.temperature} degress out. It feels like ${res.data.current.feelslike} degress out`);
})
})
