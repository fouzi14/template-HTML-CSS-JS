let star = document.getElementById('star')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river5')
let boat6 = document.getElementById('boat6')
let mountains7 = document.getElementById('mountains7')
let nouvil = document.querySelector('.nouvil')
window.onscroll=function(){
    let value=scrollY
    star.style.left=value + 'px';
    moon.style.top=value*3 + 'px';
    mountains3.style.top=value*1.5 + 'px';
    mountains4.style.top=value*1.2 + 'px';
    river5.style.top=value*1.2 + 'px';
    boat6.style.top=value*1.2 + 'px';
    boat6.style.left=value*3 + 'px';
    nouvil.style.fontSize=value + 'px';
    if(value>=67){
        nouvil.style.fontSize=67 + 'px';
        nouvil.style.position= 'fixed';
    }
    if(value>=360){
        nouvil.style.opacity=0;
    }else{
        nouvil.style.opacity=1;
    }
    if(value>=105){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001F)' ;
    }else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001F)' ;
    }
 
    
}