const video = document.getElementsByTagName("VIDEO")[0];
const span = document.querySelectorAll("p span");

// add features from the API
$("video, audio").mediaelementplayer({
    useDefaultControls: true,
    startLanguage: "en"
});

video.ontimeupdate = function () {
    for(let i = 0; i < span.length; i+=1) {
        const timeSeek = video.currentTime;
        //.toFixed(3);
        if (timeSeek > span[i].getAttribute("data-start") 
          && timeSeek < span[i].getAttribute("data-end")) {
            span[i].style.backgroundColor = "#1B3440";
            span[i].style.color = "#fff";
        } else {
            span[i].style.color = "#000";
            span[i].style.backgroundColor = "";
        }

    }
}
const spanOne = document.querySelectorAll("p span");
for(let i = 0; i <spanOne.length;i+=1 ){
    spanOne[i].addEventListener("click", function(event){
        //console.log(event.target);
        video.currentTime = event.target.getAttribute("data-start");
    }) 
}
