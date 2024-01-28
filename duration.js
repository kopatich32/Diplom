let playBtn = document.querySelector('.main-pause');
let source = document.querySelector('source');
let track = document.querySelector('#track');
let mute = document.querySelector('.mute');
let volumeWrapper  = document.querySelector('.volume-wrapper');
let volumeTrack  = document.querySelector('.volume-track');
let volumeLeft  = document.querySelector('.left-volume');
let srcSvg = playBtn.querySelector('img');

// track.volume = .3;
playBtn.addEventListener('click', ()=>{
    let attr = srcSvg.getAttribute('src');
    if(attr == 'icons/play.svg'){
        srcSvg.setAttribute('src','icons/main-pause.svg');
        track.play();
    }else{
        track.pause()
        srcSvg.setAttribute('src','icons/play.svg');
    }
})

// Play/pause on keyboard buttons
document.addEventListener('keydown',(event)=>{
    if(event.code === 'Space' && srcSvg.getAttribute('src') === 'icons/play.svg'){
        track.play()
        srcSvg.setAttribute('src','icons/main-pause.svg');
    }else{
        track.pause()
        srcSvg.setAttribute('src','icons/play.svg');
    }
})
//rewind

document.addEventListener('keydown',(event)=>{
    if(event.code === 'ArrowRight'){
        track.currentTime += 5;
        track.play();
        srcSvg.setAttribute('src','icons/main-pause.svg');

    }
    if(event.code === 'ArrowLeft'){
        track.currentTime -= 5;
        track.play();
        srcSvg.setAttribute('src','icons/main-pause.svg');

    }
})
mute.addEventListener('click',()=>{
    track.muted = track.muted === false;

})
//Default site volume
track.volume = track.volume/ 2

let goneSec = document.querySelector('.seconds');
let goneMin = document.querySelector('.minutes');
let leftTime = document.querySelector('.left-time');
let goneTrack = document.querySelector('.gone-track');
goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack')
track.addEventListener('loadedmetadata',()=>{
    let duration =(track.duration / 60).toFixed(2).split('.');
    let endTime = duration[0] + ':'+ (+duration[1] - 23) ;
    track.currentTime = localStorage.getItem('lastPositionOfTrack');
    goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack');
    leftTime.innerHTML = endTime;
    // volumeTrack.style.width = (currentVolume * 100) + '%';

})

track.addEventListener('timeupdate',(event)=> {
    let currTime = Math.floor(event.target.currentTime);
    let currFullSec = event.target.currentTime;
    let res = currTime % 10;
    //seconds
    if ((currTime < 10)) {
        goneSec.innerHTML = '0'+res;
    }else{
        goneSec.innerHTML = currTime;
    }
    if(currTime >= 60){
        goneSec.innerHTML = currTime - (60 * Math.trunc(currTime / 60));
        if(+goneSec.innerHTML < 10){
            goneSec.innerHTML = '0'+res
        }
    }
    // minutes
    if(currFullSec >= 0){
        goneMin.innerHTML = '0'+ Math.trunc(currTime / 60);
    }else if(Math.floor(currFullSec / 60) >= 10){
        goneMin.innerHTML =  (Math.round(currTime / 60)).toString();
    }
    localStorage.setItem('lastPositionOfTrack', currTime)
    // Width duration
    let onePercent = Math.trunc(track.duration) / 100;
    goneTrack.style.width = currTime / onePercent + '%';
    //Width volume
    volumeTrack.style.width = (track.volume * 100) + '%';
})
//End of track
track.addEventListener('ended',(event)=>{
    track.currentTime = 0;
    srcSvg.setAttribute('src','icons/play.svg');
})
// Change volume width
track.addEventListener('volumechange',(event)=>{
    volumeTrack.style.width = (track.volume * 100) + '%';
})
//Choose duration on line

let durationLength = document.querySelector('.duration-track');
let volumeLevel = document.querySelector('.volume-wrapper');
durationLength.onclick = (event)=>{
goneTrack.style.width = event.offsetX + 'px';
let onePercPX = durationLength.offsetWidth / 100;
    let percentOfLine = Math.trunc(event.offsetX / onePercPX);
    track.currentTime = percentOfLine * track.duration / 100;
}
//Choose volume on line
volumeLevel.onclick = (event)=> {
    volumeTrack.style.width = event.offsetX + 'px';
    let onePercPxVolume = volumeLevel.offsetWidth / 100;
    let percentOfLineVolume = Math.trunc(event.offsetX / onePercPxVolume);
    track.volume = percentOfLineVolume / 100
}



