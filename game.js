let angle = 0;


    setInterval(function(){
        $('#dot').css('transform','rotate(' + angle + 'deg)');
     }, 17);



window.addEventListener('deviceorientation', function(e) {
    console.log( e.webkitCompassHeading );
    angle = e.webkitCompassHeading;
    document.getElementById("data").innerHTML=("Degrees: " + Math.floor(angle) + "°");
}, false);