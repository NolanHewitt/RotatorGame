let angle = 0;


    setInterval(function(){
        $('#dot').css('transform','rotate(' + angle + 'deg)');
     }, 17);



// window.addEventListener('deviceorientation', function(e) {
//     console.log( e.webkitCompassHeading );
//     angle = e.webkitCompassHeading;
//     document.getElementById("data").innerHTML=("Degrees: " + Math.floor(angle) + "°");
// }, false);


const options = {
    enableHighAccuracy: true,
};

function success(pos){
    let crd = pos.coords.heading;
    console.log(crd);
    angle = crd;
};

function error(err) {
    console.log("error yo");
};

navigator.geolocation.watchPosition(success, error, options);