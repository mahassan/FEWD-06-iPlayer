const video = document.getElementsByTagName('VIDEO')[0];
const span = document.querySelectorAll('p span');
video.ontimeupdate = function(){
    for(i = 0; i < span.length;i++){
        const timeSeek = video.currentTime;
        const toDecimal = timeSeek.toFixed(3);
        if(toDecimal >= span[i].getAttribute("data-start") && toDecimal <= span[i].getAttribute("data-end")){
            span[i].style.color = 'red';
            console.log(toDecimal);
        }else{
            span[i].style.color = 'black';
        }

    }
}