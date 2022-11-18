//for display time...
var currTime = document.getElementById("current-time");

function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10 ) ? "0" + hh:hh;
     mm = (mm < 10 ) ? "0" + mm:mm;
     ss = (ss < 10 ) ? "0" + ss:ss;
     let time = hh + ":" + mm + ":" + ss ;

    currTime.innerText = time;
     let t = setTimeout(function(){
        currentTime()
       if(alarm_List.includes(time)){
            ringing(time);
        }
    },1000);
 }
 currentTime();
 // PUT "0" BEFORE  SINGAL DIGIT OF HOUR
 function formatTime(time){
    if(time<10 && time.length !=2){
        return"0" + time;
    }
    return time;
 }
 const myList = document.querySelector(".set-alarms-list");

 //Adding alarm input from user 
 let alarm_List= [];
 const userInput = document.querySelector(".user-input");
 userInput.addEventListener("submit", function(e){
    e.preventDefault();
    const hour = userInput.hour.value;
    const min = userInput.min.value;
    const sec = userInput.sec.value;
    let new_h = formatTime(hour);
    if(new_h === "0"){
        new_h ="00";
    }

    let new_m = formatTime(min);
    if(new_m === "0"){
        new_m ="00";
    }

    let new_s = formatTime(sec);
    if(new_s === "0"){
        new_s ="00";
    }

    const new_Alarm = `${new_h}:${new_m}:${new_s}`;
    if(isNaN(new_Alarm)){
        if(!alarm_List.includes(new_Alarm)){
            alarm_List.push(new_Alarm);
            shownew_Alarm(new_Alarm);
            addAlarm.reset();
        }
        else{
            alert('Alarm for ${new_Alarm} already set.');
        }
    }
    else{
        alert("Invalid Time Entered");
    }

 });

 //Adding new Alarm in new list with delete button
 function shownew_Alarm(new_Alarm){
    const html = `
    <li class = "time-list">
    <span class = "time">${new_Alarm}</span>
    <button class = "deleteAlarm time-control" id = "delete-button" onclick = "remove(this.value)" value=${new_Alarm}>Delet</button>
    <li>
    <br>`;
    myList.innerHTML += html;
 }
 //audio to ring alarm
 const audio = new Audio("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3");
 audio.loop=true;  
       
        
//Ring the audio at perfect time
function ringing(time){
    audio.play();
    audio.play();

    alert(`Hey it is ${time}`);
}

//function for stop the alarm
const clearAlarm = () =>{ 
    audio.pause();
    clearTimeout(alarmTimeout);
    alert("Alarm Cleared");
};
//Function for stop the alarm
const mylist = document.getElementsByClassName("set-alarms-list");
myList.addEventListener("click",(e) => {
    if(e.target.classList.contains("deleteAlarm")){
        e.target.parentElement.remove();
    }
});
//Remove alarm from arryList
const remove = (value) => {
    let newList = alarm_List.filter((time) => time != value);
    alarm_List.length = 0;
    alarm_List.push.apply(alarm_List,newList);
};

