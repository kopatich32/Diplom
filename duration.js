let playBtn = document.querySelector('.main-pause');
let source = document.querySelector('source');
let track = document.querySelector('#track');
let mute = document.querySelector('.mute');
let volumeTrack  = document.querySelector('.volume-track');
let srcSvg = playBtn.querySelector('img');
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
document.querySelector('.restart').addEventListener('click', ()=>{
    track.currentTime = 0;
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
track.volume = track.volume / 8

let goneSec = document.querySelector('.seconds');
let goneMin = document.querySelector('.minutes');
let leftTime = document.querySelector('.left-time');
let goneTrack = document.querySelector('.gone-track');
goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack')



class TrackControl{
    updateTrack(elem){
            elem.addEventListener('timeupdate',(event)=> {
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
                let onePercent = Math.trunc(elem.duration) / 100;
                goneTrack.style.width = currTime / onePercent + '%';
                //Width volume
                volumeTrack.style.width = (elem.volume * 100) + '%';
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
        let $ = document.querySelector.bind(document);

        function play(){
            tracks.forEach(track=>{
                track.addEventListener('click',(e)=>{
                    $('#track').remove();
                    let artist = track.querySelector('.track-name-main').innerHTML;
                    let nameOfTrack = track.querySelector('.artist-main').innerHTML;
                    let linkOfTrack = track.querySelector('.track-link').value;
                    let trackCover = track.querySelector('.track-cover').getAttribute('src');
                    // main-player
                    $('.track-player').innerHTML = artist;
                    $('.artist-player').innerHTML = nameOfTrack;
                    $('.player-cover').setAttribute('src',trackCover);
                    // $('source').setAttribute('src',track);
                    let newAudio = document.createElement('audio');
                    $('.wrapper').insertAdjacentElement('afterend',newAudio);
                    let newSource = document.createElement('source');
                    newAudio.insertAdjacentElement('afterbegin',newSource);
                    newAudio.setAttribute('controls','true');
                    // newAudio.style.display ='none';
                    newSource.setAttribute('src',linkOfTrack);
                    newAudio.id = 'track';

                    classOfTrack.updateTrack(newAudio);
                    classOfTrack.fillTimeLIne(newAudio);
                    classOfTrack.timeCurTrack(newAudio);
                    $('#track').play();
                    // classOfTrack.timeCurTrack();
                    console.log(newAudio)

                })
            })

        }
        play()

    }
    timeCurTrack(elem){
        elem.addEventListener('loadedmetadata',()=>{
            let duration = (elem.duration / 60).toFixed(2).split('.');
            let endTime = duration[0] + ':'+ (+duration[1] - 23) ;
            elem.currentTime = localStorage.getItem('lastPositionOfTrack');
            goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack');
            leftTime.innerHTML = endTime;
            // volumeTrack.style.width = (currentVolume * 100) + '%';

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
}
let classOfTrack = new TrackControl();
classOfTrack.updateTrack(track);
classOfTrack.endTrack();
classOfTrack.chooseTrack();
classOfTrack.timeCurTrack(track);





