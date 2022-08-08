
const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.error){
            messageOne.textContent = data.error;
        }
        else{
            messageOne.textContent = ''
            messageTwo.textContent =`It is currently ${data.currentTemp} degress out. It feels like ${data.feelsTemp} degress out.`
        }
        
    })
})
