window.onload=function(){
    getTime();
}
function getTime(){
    var today=new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var second=today.getSeconds();

    minutes=checkTime(minutes);
    second=checkTime(second);
    document.getElementById('txt').innerHTML=hours+":"+minutes+":"+second;
    getTimeOut(function(){
        getTime()},1000
    );
}
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
