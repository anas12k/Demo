let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    time=checkTime(time);
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    time=a.getHours()+ ':' +a.getMinutes()+ ':' +a.getSeconds();
    document.getElementById('txt').innerHTML=time+" on "+date;
}, 1000);

