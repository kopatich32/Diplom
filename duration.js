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
track.volume = track.volume / 8

let goneSec = document.querySelector('.seconds');
let goneMin = document.querySelector('.minutes');
let leftTime = document.querySelector('.left-time');
let goneTrack = document.querySelector('.gone-track');
goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack')


let currFullSec = 0;
class TrackControl{
    updateTrack(elem){
            elem.addEventListener('timeupdate',(event)=> {
                isPlaying = true;
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

        function play(){
            let tracks = document.querySelectorAll('.current-track-main');

            tracks.forEach(track=>{

                track.addEventListener('click',(e)=>{
for(let i = 0; i < tracks.length; i++){
    if(e.target.closest('.current-track-main').className.includes('now_playing')) continue
    tracks[i].classList.remove('now_playing')
}

                    $('#track').remove();
                    let artist = track.querySelector('.track-name-main').innerHTML;
                    let nameOfTrack = track.querySelector('.artist-main').innerHTML;
                    let linkOfTrack = track.querySelector('.track-link').value;
                    let trackCover = track.querySelector('.track-cover').getAttribute('src');
                    // main-player
                    $('.track-player').innerHTML = artist;
                    $('.artist-player').innerHTML = nameOfTrack;
                    $('.player-cover').setAttribute('src',trackCover);
                    let newAudio = document.createElement('audio');
                    $('.wrapper').insertAdjacentElement('afterend',newAudio);
                    let newSource = document.createElement('source');
                    newAudio.insertAdjacentElement('afterbegin',newSource);
                    newAudio.setAttribute('controls','true');
                    newAudio.currentTime = 0;
                    // newAudio.style.display ='none';
                    newSource.setAttribute('src',linkOfTrack);
                    newAudio.id = 'track';
                    classOfTrack.updateTrack(newAudio);
                    classOfTrack.fillTimeLIne(newAudio);
                    classOfTrack.restartTrack(newAudio);

                    track.volume = track.volume / 8;
                    newAudio.play()
                    if(e.target.closest('.current-track-main').className.includes('now_playing')){
                        newAudio.pause()
                        newAudio.currentTime = localStorage.getItem('lastPositionOfTrack')
                        console.log('pause')
                    }
                    if(e.target.closest('.current-track-main')) {
                        e.target.closest('.current-track-main').classList.add('now_playing');
                        newAudio.currentTime = localStorage.getItem('lastPositionOfTrack')
                        console.log('play')
                    }
                    if(e.target.closest('.current-track-main').className.includes('now_playing')){
                        console.log('paused')
                    }



///////////////////
//
//                     let currentSong = null; // Переменная для хранения ссылки на текущую песню
//
//                     function playOrPause(song) {
//                         if (currentSong !== song) { // Если это новая песня
//                             if (currentSong !== null) {
//                                 currentSong.pause(); // Приостанавливаем предыдущую песню, если такая есть
//                             }
//                             song.play(); // Запускаем новую песню
//                             currentSong = song; // Сохраняем ссылку на новую песню
//                         } else { // Если это та же песня, то делаем паузу
//                             if (song.paused) {
//                                 song.play();
//                             } else {
//                                 song.pause();
//                             }
//                         }
//                     }
//
// // Пример использования на вашем сайте
//                     let song1 = document.getElementById('song1'); // Замените 'song1' на id вашего первого аудиоэлемента
//                     let song2 = document.getElementById('song2'); // Замените 'song2' на id вашего второго аудиоэлемента
//
//                     song1.addEventListener('click', function() {
//                         playOrPause(song1);
//                     });
//
//                     song2.addEventListener('click', function() {
//                         playOrPause(song2);
//                     });





                })

            })

        }
        play()


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
classOfTrack.chooseTrack();
classOfTrack.timeCurTrack(track);



