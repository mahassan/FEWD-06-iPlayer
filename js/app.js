const video = document.getElementsByTagName('VIDEO')[0];
const span = document.querySelectorAll('p span');

// add features from the API
$('video, audio').mediaelementplayer({
    features: ['playpause', 'fullscreen', 'volume', 'progress'],
    startLanguage: 'en'
});

video.ontimeupdate = function () {
    for (i = 0; i < span.length; i++) {
        const timeSeek = video.currentTime;
        //.toFixed(3);
        if (timeSeek > span[i].getAttribute("data-start") && timeSeek < span[i].getAttribute("data-end")) {
            span[i].style.backgroundColor = '#1B3440';
            span[i].style.color = '#fff';
        } else {
            span[i].style.color = '#000';
            span[i].style.backgroundColor = '';
        }

    }
}