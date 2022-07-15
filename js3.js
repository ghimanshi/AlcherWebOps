const btn = document.querySelector('.location');

const findMyState = () =>{
    const status = document.querySelector('.state');

    const success = (position) =>{
        console.log(position);
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log(`longitude : ${longitude} latitude : ${latitude}`);

        const geoApiurl = `https://us1.locationiq.com/v1/reverse.php?key=pk.e23cf547edcb6c73a595534dcf8edf27&lat=${latitude}&lon=${longitude}&format=json`;
        fetch(geoApiurl)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            status.innerHTML = `Current Position : <br> ${data.address.city}, ${data.address.country}`;
            btn.style.display = 'none';
        })

    }

    const error = () =>{
        status.innerHTML = "Access to location denied";
    }
    navigator.geolocation.getCurrentPosition(success, error);


}

btn.addEventListener('click', findMyState);