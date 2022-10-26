let i2 = Math.trunc(getTime(1));
let j2 = getTime(0);
let k2 = getTime(2);

new Promise(()=>{setInterval(()=>{
    k2++
    if(k2 >= 61){
        k2 = Math.trunc(((k2/60) - Math.trunc(k2/60)) * 60)
    }
    if(k2 == 60){
        j2++
        if(j2 == 61){
            j2 = 1
            i2++
        if(i2 == 24){
            i2= 0;
        }
    }}
    if(j2 < 10){
        digitM.innerHTML = `0${j2}`
    }
    else{
        digitM.innerHTML = `${j2}`
    }
    if((i2) < 10){
        digitH.innerHTML = `0${i2}`
    }
    else{

    digitH.innerHTML = `${i2}`}   
},1000)})