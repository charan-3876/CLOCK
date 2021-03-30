setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds= time.getSeconds();
    am_pm="AM";
    
    if(hour>12)
    {
        hour = hour - 12;
        am_pm = "PM";
    }

    if(hour == 0)
    {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hour + ":" + minute + ":" + seconds + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}
showTime();