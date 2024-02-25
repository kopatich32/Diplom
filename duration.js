

let $ = document.querySelector.bind(document);
let playBtn = document.querySelector('.main-pause');
let source = document.querySelector('source');
let track = document.querySelector('#track');
let mute = document.querySelector('.mute');
let volumeTrack  = document.querySelector('.volume-track');
let srcSvg = playBtn.querySelector('img');
let isPlaying = false;
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
    if((event.code === 'Space' || event.key === 'MediaPlayPause') && srcSvg.getAttribute('src') === 'icons/play.svg' ){
        track.play()
        srcSvg.setAttribute('src','icons/main-pause.svg');
    }else{
        track.pause()
        srcSvg.setAttribute('src','icons/play.svg');
    }
})

//restart

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
track.volume = track.volume / 3;

let goneSec = document.querySelector('.seconds');
let goneMin = document.querySelector('.minutes');
let leftTime = document.querySelector('.left-time');
let goneTrack = document.querySelector('.gone-track');
goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack')


let currFullSec = 0;
class TrackControl{


    constructor() {
        this.time1 = 0;
        this.start = 0;
    }


    updateTrack(elem){
            elem.addEventListener('timeupdate',(event)=> {
                // isPlaying = true;
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

                TrackControl.time1 = currTime;
                //////////////////////////////////////////////////////////////////
                // Width duration
                let onePercent = Math.trunc(elem.duration) / 100;
                goneTrack.style.width = currTime / onePercent + '%';
                //Width volume
                volumeTrack.style.width = (elem.volume * 100) + '%';
fullDurationTrack(elem)


            })
    }
    endTrack(){
//End of track
        track.addEventListener('ended',(event)=>{
            track.currentTime = 0;
            srcSvg.setAttribute('src','icons/play.svg');
        })
    }
    chooseTrack(){

            let tracks = document.querySelectorAll('.current-track-main');

            tracks.forEach(audio=>{

                audio.addEventListener('click',(e)=>{
                    let clickTrack = e.target.closest('.current-track-main');
                    let trackLink = clickTrack.querySelector('.track-link').value;
                    track.src = trackLink;
                    let playingID = clickTrack.dataset.track_id;
                    track.id = playingID
                    if(track.id != playingID){
                        track.pause();
                        console.log('play')
                    }else{
                        track.play();
                        console.log('pause')
                    }
                    // track.play()

                    console.log(track.id)
                    console.log('track of number - ' + playingID)

                })
            })
        }


    fillTimeLIne(elem){

// Change volume width
        elem.addEventListener('volumechange',(event)=>{
            volumeTrack.style.width = (elem.volume * 100) + '%';
        })
//Choose duration on line

        let durationLength = document.querySelector('.duration-track');
        let volumeLevel = document.querySelector('.volume-wrapper');
        durationLength.onclick = (event)=>{
            goneTrack.style.width = event.offsetX + 'px';
            let onePercPX = durationLength.offsetWidth / 100;
            let percentOfLine = Math.trunc(event.offsetX / onePercPX);
            elem.currentTime = percentOfLine * elem.duration / 100;
        }
//Choose volume on line
        volumeLevel.onclick = (event)=> {
            volumeTrack.style.width = event.offsetX + 'px';
            let onePercPxVolume = volumeLevel.offsetWidth / 100;
            let percentOfLineVolume = Math.trunc(event.offsetX / onePercPxVolume);
            elem.volume = percentOfLineVolume / 100;
        }
    }
    restartTrack(elem){
        document.querySelector('.restart').addEventListener('click', ()=>{
            elem.currentTime = 0;
        })
    }
    timeCurTrack(elem){
        elem.addEventListener('loadedmetadata',()=>{
            fullDurationTrack(elem)
            classOfTrack.fillTimeLIne(elem)
            elem.currentTime = localStorage.getItem('lastPositionOfTrack');
            goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack');
        })
    }
}
function fullDurationTrack(elem){
    let duration = (elem.duration / 60).toFixed(2).split('.');
    leftTime.innerHTML = duration[0] + ':'+ (duration[1]);
}
let classOfTrack = new TrackControl();
classOfTrack.updateTrack(track);
classOfTrack.endTrack();
classOfTrack.timeCurTrack(track);
classOfTrack.chooseTrack();




