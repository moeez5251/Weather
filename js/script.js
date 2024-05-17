let load = document.getElementById('loader');
function loader() {
    load.style.marginTop = '-3000px'
}
let Input = document.getElementById('inp');
Input.addEventListener('input', () => {
    Input.value = Input.value.toUpperCase();
});
let city;
let search = document.getElementById('image');
let fade=document.getElementById('img');
const image=document.querySelector('.img')
const Description=document.querySelector('.Description');
const Temp=document.querySelector('.temp');
const humidity=document.querySelector('.humidity_value');
const wind=document.querySelector('.wind_value');
const feel=document.querySelector('.Feel');
const pressure=document.querySelector('.pressure');
let error=document.querySelector('.container');
let error2=document.querySelector('.container1');
search.addEventListener('click', () => {
    
    if (Input.value=="") {
        alert('Kindly Input Your Location');
        return;
    }
    city = Input.value;
    Input.value = "";
    document.querySelector('.box').style.height='500px';
    const API_key   = 'b411791c345dfc50fccd83cdeec2a878';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},pk&APPID=${API_key}`)
    .then(response=>{   
    return response.json();
    })
    .then(json=>{
        if(json.cod==='404'){
            fade.style.display='none';
                Description.style.display='none';
                Temp.style.display='none';
                humidity.style.display='none';
                wind.style.display='none';
                feel.style.display='none';
                pressure.style.display='none';
                document.querySelectorAll('.elements')[0].style.display='none';
                document.querySelectorAll('.elements')[1].style.display='none';
                document.querySelector('.container1').style.display='none';
                error.classList.remove('container');
                error.classList.remove('animation');
                error.classList.add('error');}
                else{
                    fade.style.display='';
                Description.style.display='';
                Temp.style.display='';
                humidity.style.display='';
                wind.style.display='';
                feel.style.display='';
                pressure.style.display='';
                document.querySelectorAll('.elements')[0].style.display='';
                document.querySelectorAll('.elements')[1].style.display='';
                document.querySelector('.container1').style.display='';
                error.classList.remove('error');
                error.classList.add('container');
                error.classList.add('animation');
                }

        
        if (json.weather[0].main=='Clear') {
           image.src='img/Clear.png';
        }
        else if(json.weather[0].main=='Thunderstorm'){
            image.src='img/Thunder.png';

        }
        else if(json.weather[0].main=='Drizzle'){
            image.src='img/Drizzle.png';

        }
        else if(json.weather[0].main=='Rain'){
            image.src='img/Rain.png';

        }
        else if(json.weather[0].main=='Snow'){
            image.src='img/Snow.png';

        }
        else if(json.weather[0].main=='Atmosphere'){
            image.src='img/Clouds.png';

        }
        else if(json.weather[0].main=='Clouds'||json.weather[0].main=='Haze'||json.weather[0].main=='Smoke'){
            image.src='img/Clouds.png';
        }
        fade.classList.add('animation');
            Description.innerHTML=`${json.weather[0].description}`;
            Temp.innerHTML=parseInt(json.main.temp-273) ;
        humidity.innerHTML=`${json.main.humidity}%`
        wind.innerHTML=`${parseInt(json.wind.speed)} km/h`
        pressure.innerHTML=json.main.pressure;
        feel.innerHTML=parseInt(json.main.feels_like-273) ;
        error.classList.add('animation');
        error2.classList.add('animation');
    });
});

function keys(y) {
        const key=y.key;
        if(key=="Enter"){
            const btn=document.querySelector(`img[accesskey="Enter"]`);
            if(btn){
                btn.click();
            }
        }
}

document.addEventListener('keydown',keys);