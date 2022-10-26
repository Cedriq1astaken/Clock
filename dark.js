let darkBtn = document.getElementById('circle');
let dark = document.getElementById('dark');
let minuteHandle = document.getElementById('good2');
let digitalla = document.getElementById('digital');


let check = 0
circle.onclick = () =>{
    if(check  == 0){
        circle.style.transform = 'translate(60%, -50%)';
        check++
        circle.style.backgroundColor = 'white';
        dark.style.backgroundColor = 'black';
        dark.style.borderBlockColor = 'white';
        clock.style.backgroundColor = '#0E0F19';
        minuteHandle.style.backgroundColor ='white';
        minuteHandle.style.borderBlockColor ='white';
        document.body.style.backgroundColor = '#040403';
        digitalla.style.backgroundColor= '#0E0F19' ;
        return
    }
    if(check  == 1){
        circle.style.transform = 'translate(-50%, -50%)';
        check--
        circle.style.backgroundColor = 'black';
        dark.style.backgroundColor = 'white';
        dark.style.borderBlockColor = 'black';
        clock.style.backgroundColor = '#f9f9f9';
        minuteHandle.style.backgroundColor ='black';
        minuteHandle.style.backgroundColor ='black';
        minuteHandle.style.borderBlockColor ='black';
        document.body.style.backgroundColor = 'white';
        digitalla.style.backgroundColor='#f9f9f9';
        return
    }
}