const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const trait = document.getElementsByClassName('trait');
const digitH = document.getElementById('digital_hour');
const digitM = document.getElementById('digital_minute');
let i = -90;
let j = -90;
let k = -90;
const current = new Date();
let time = current.getTime();
let getTime = (a) =>{
    let gmt = (current.getTimezoneOffset() / 60)
    let seconds = time/1000
    let minutes = seconds/60
    let theoryHours = (minutes/60) - gmt
    let hours = ((theoryHours/24) - Math.trunc(theoryHours/24)) * 24
    let realSeconds = Math.trunc((hours - Math.trunc(hours)) * 3600)
    let realMinutes = Math.trunc((hours - Math.trunc(hours)) * 60)
    if(a == 0){
        return realMinutes
    }
    if(a == 1){
        return hours
    }
    if(a == 2){
        return realSeconds
    }
}
let minuteCon = (x) =>{
    j = 6*x - 90
}
let hourCon = (x) =>{
    i = 30*x - 90
}
let secondCon = (x) =>{
    k = x - 90
}
window.onload = ()=>{
        minuteCon(getTime(0))
        hourCon(getTime(1))       
        secondCon(getTime(2))
        second.style.transform = `translate(-50%, -50%)`
        second.style.transform += `rotate(${k}deg)`  
        hour.style.transform = `translate(-50%, -50%)`
        hour.style.transform += `rotate(${i}deg)`
        minute.style.transform = `translate(-50%, -50%)`
        minute.style.transform += `rotate(${j}deg)`
        if(getTime(0) < 10){
            digitM.innerHTML = `0${getTime(0)}`
        }
        else{
            digitM.innerHTML = `${getTime(0)}`
        }
        if(Math.trunc(getTime(1)) < 10){
            digitH.innerHTML = `0${Math.trunc(getTime(1))}`
        }
        else{

        digitH.innerHTML = `${Math.trunc(getTime(1))}`}
}
new Promise(()=> {setInterval(()=>{
    i++
    let a = `${i}deg`
    hour.style.transform = `translate(-50%, -50%)`
    hour.style.transform += `rotate(${a})`
},120000)})
new Promise(()=>{setInterval(()=>{
    j++
    let a = `${j}deg`
    minute.style.transform = `translate(-50%, -50%)`
    minute.style.transform += `rotate(${a})`
},10150)})
new Promise(()=>{setInterval(()=>{
    k++
    let a = `${k}deg`
    second.style.transform = `translate(-50%, -50%)`
    second.style.transform += `rotate(${a})`
},175)})

