let $ = document.querySelector.bind(document);
let playBtn = document.querySelector('.main-pause');
let track = document.querySelector('audio');
let mute = document.querySelector('.mute');
let volumeTrack = document.querySelector('.volume-track');
let srcSvg = playBtn.querySelector('img');
let trackList = document.querySelectorAll('.current-track-main');
let isPlaying = false;
let playingTrack;
let counterToBase = 0;
//Default site volume
track.volume = track.volume / 2;

// Play/pause on keyboard buttons
document.addEventListener('keydown', (event) => {
    if ((event.code === 'Space' || event.key === 'MediaPlayPause') && srcSvg.getAttribute('src') === 'icons/play.svg') {
        track.play()
        srcSvg.setAttribute('src', 'icons/main-pause.svg');
    } else {
        track.pause()
        srcSvg.setAttribute('src', 'icons/play.svg');
    }
})
//rewind
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        track.currentTime += 5;
        track.play();
        srcSvg.setAttribute('src', 'icons/main-pause.svg');
    }
    if (event.code === 'ArrowLeft') {
        track.currentTime -= 5;
        track.play();
        srcSvg.setAttribute('src', 'icons/main-pause.svg');
    }
})
mute.addEventListener('click', () => {
    let muteIcon = document.querySelectorAll('.mute-line');
    track.muted = track.muted === false;
    muteIcon.forEach(lines => {
        lines.classList.toggle('mute')
    })
})

let goneSec = document.querySelector('.seconds');
let goneMin = document.querySelector('.minutes');
let leftTime = document.querySelector('.left-time');
let goneTrack = document.querySelector('.gone-track');
goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack')

let currFullSec = 0;
class TrackControl {

    constructor() {
        this.listeningCounter = 0;
        this.lastTimePosition = 0;
        this.idFromMainButton = 0;
        this.idCurrentTrack = 0;

    }
    playMainButton() {
        playBtn.addEventListener('click', () => {

            let load = document.querySelector('.PastPaused');
            let playing = document.querySelector('.playing_now');
            let paused = document.querySelector('.paused_now');
            let listElem = document.getElementById(track.id);
           if(load){
               load.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg')
           }
           if(playing) {
               playing.querySelector('.play_now_list').setAttribute('src', 'icons/pause_list.svg')
           }
           if(paused) {
               paused.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg')
           }

            if (!isPlaying) {
                isPlaying = true;
                listElem.classList.toggle('playing_now');
                listElem.classList.remove('paused_now');
                srcSvg.setAttribute('src', 'icons/play.svg');
                trackList.forEach(classes => {
                    classes.classList.remove('PastPaused');
                })
                srcSvg.setAttribute('src', 'icons/main-pause.svg');
                playingTrack = track.id
                track.play();
            } else {
                track.pause();
                isPlaying = false;
                listElem.classList.remove('playing_now');
                listElem.classList.add('paused_now');
                srcSvg.setAttribute('src', 'icons/play.svg');
            }
        })
    }

    updateTrack(elem) {
        elem.addEventListener('timeupdate', (event) => {
            let currTime = Math.floor(event.target.currentTime);
            let currFullSec = event.target.currentTime;
            this.lastTimePosition = currTime;
            let res = currTime % 10;
            //seconds
            if ((currTime < 10)) {
                goneSec.innerHTML = '0' + res;
            } else {
                goneSec.innerHTML = currTime;
            }
            if (currTime >= 60) {
                goneSec.innerHTML = currTime - (60 * Math.trunc(currTime / 60));
                if (+goneSec.innerHTML < 10) {
                    goneSec.innerHTML = '0' + res
                }
            }
            // minutes
            if (currFullSec >= 0) {
                goneMin.innerHTML = '0' + Math.trunc(currTime / 60);
            } else if (Math.floor(currFullSec / 60) >= 10) {
                goneMin.innerHTML = (Math.round(currTime / 60)).toString();
            }
            localStorage.setItem('lastPositionOfTrack', currTime);
            // Width duration
            let onePercent = Math.trunc(elem.duration) / 100;
            goneTrack.style.width = currTime / onePercent + '%';
            //Width volume
            volumeTrack.style.width = (elem.volume * 100) + '%';
            fullDurationTrack(elem);
            counterToBase = this.lastTimePosition;
            this.idCurrentTrack = event.target.id;
            // if (currTime - this.listeningCounter == 2) {
            //     let tracks = document.querySelectorAll('.current-track-main');
            //     tracks.forEach(count => {
            //
            //         if (event.target.id == count.dataset.track_id) {
            //             count.querySelector('.listening-main').innerHTML += (count.querySelector('.listening-main').innerHTML)++ ;
            //         }
            //     })

                // fetch('listened.php', {
                //     method: 'POST',
                //     body: listened,
                // })
                //     .then(resp => resp.json())
                //     .then(data => console.log(data))
            //}
        })
    }

    endTrack() {
        track.addEventListener('ended', (e) => {
            track.currentTime = 0;
            let endedTrack = document.getElementById(e.target.id);
            endedTrack.querySelector('.play_now_list').setAttribute('src', 'icons/pause_list.svg');
            srcSvg.setAttribute('src', 'icons/play.svg');
            endedTrack.classList.remove('playing_now');
            endedTrack.classList.add('paused_now');
        })
    }

    chooseTrack() {
        trackList.forEach(audio => {
            audio.addEventListener('click', (e) => {
                trackList.forEach(clearIcon =>{
                    clearIcon.querySelector('.play_now_list').setAttribute('src', 'icons/play_list.svg')
                })
                if (audio.className.includes('PastPaused')) {
                    track.currentTime = localStorage.getItem('lastPositionOfTrack');
                    audio.classList.remove('PastPaused');
                    audio.classList.add('playing_now');
                    isPlaying = true;
                    playingTrack = audio.dataset.track_id;
                    srcSvg.setAttribute('src', 'icons/main-pause.svg');
                    track.play();
                } else {
                    for (let i = 0; i < trackList.length; i++) {
                        trackList[i].classList.remove('playing_now');
                        trackList[i].classList.remove('paused_now');
                        trackList[i].classList.remove('PastPaused');
                    }

                    let clickTrack = e.target.closest('.current-track-main');
                    let trackLink = clickTrack.querySelector('.track-link').value;
                    let idCurrentTrack = clickTrack.dataset.track_id;
                    clickTrack.classList.add('playing_now');
                    track.id = clickTrack.dataset.track_id;
                    // Show current track in tracklist
                    document.querySelectorAll('.play_now').forEach(paint => {
                        paint.style.color = '';
                    })
                    document.querySelectorAll('.artist-main').forEach(artisColor => {
                        artisColor.style.color = '';
                    })
                    if (idCurrentTrack === track.id) {
                        clickTrack.querySelectorAll('.play_now').forEach(paint => {
                            paint.style.color = '#5C67DE';
                        })
                        clickTrack.querySelector('.artist-main').style.color = 'white';
                    }

                    if (isPlaying) {
                        if (playingTrack !== idCurrentTrack) {
                            isPlaying = true;
                            track.src = trackLink;
                            track.play();
                            trackData(clickTrack);
                        } else {
                            isPlaying = false;
                            track.pause();
                            srcSvg.setAttribute('src', 'icons/play.svg');
                            clickTrack.querySelector('.play_now_list').setAttribute('src','icons/pause_list.svg');
                            clickTrack.classList.remove('playing_now');
                            clickTrack.classList.add('paused_now');
                        }

                    } else {
                        isPlaying = true;
                        if (playingTrack !== idCurrentTrack) {
                            track.src = trackLink;
                        }
                        track.play();
                        trackData(clickTrack);
                    }
                    playingTrack = clickTrack.dataset.track_id;
                    localStorage.setItem('lastArtist', clickTrack.querySelector('.artist-main').innerText);
                    localStorage.setItem('lastTrack', clickTrack.querySelector('.track-name-main').innerText);
                    localStorage.setItem('lastCover', clickTrack.querySelector('.track-cover').src);
                    localStorage.setItem('lastFullTime', clickTrack.querySelector('.duration-main').innerText);
                    localStorage.setItem('lastLink', track.src);
                    localStorage.setItem('lastIDtrack', clickTrack.dataset.track_id);
                }
                this.listeningCounter = track.currentTime;
            })
        })
    }

    fillTimeLIne(elem) {
// Change volume width
        elem.addEventListener('volumechange', () => {
            volumeTrack.style.width = (elem.volume * 100) + '%';
            // TrackControl.storageVolume = currTime;
        })
//Choose duration on line
        let durationLength = document.querySelector('.duration-track');
        let volumeLevel = document.querySelector('.volume-wrapper');
        durationLength.onclick = (event) => {
            goneTrack.style.width = event.offsetX + 'px';
            let onePercPX = durationLength.offsetWidth / 100;
            let percentOfLine = Math.trunc(event.offsetX / onePercPX);
            elem.currentTime = percentOfLine * elem.duration / 100;
        }
//Choose volume on line
        volumeLevel.onclick = (event) => {
            volumeTrack.style.width = event.offsetX + 'px';
            let onePercPxVolume = volumeLevel.offsetWidth / 100;
            let percentOfLineVolume = Math.trunc(event.offsetX / onePercPxVolume);
            elem.volume = percentOfLineVolume / 100;
            localStorage.setItem('lastVolumeLevel', elem.volume);
        }
    }

    restartTrack(elem) {
        document.querySelector('.restart').addEventListener('click', () => {
            elem.currentTime = 0;
        })
    }

    timeCurTrack(elem) {
        elem.addEventListener('loadedmetadata', () => {
            fullDurationTrack(elem)
            classOfTrack.fillTimeLIne(elem);
            elem.currentTime = localStorage.getItem('lastPositionOfTrack');
        })
    }
}
function trackData(elem) {
    srcSvg.setAttribute('src', 'icons/main-pause.svg');
    $('.track-player').innerText = elem.querySelector('.track-name-main').innerText;
    $('.artist-player').innerText = elem.querySelector('.artist-main').innerText;
    $('.player-cover').src = elem.querySelector('.track-cover').src;
    elem.querySelector('.play_now_list').setAttribute('src','icons/pause.svg');

}
function fullDurationTrack(elem) {
    let duration = (elem.duration / 60).toFixed(2).split('.');
    leftTime.innerHTML = duration[0] + ':' + (duration[1]);
}

let classOfTrack = new TrackControl();
classOfTrack.updateTrack(track);
classOfTrack.endTrack();
classOfTrack.timeCurTrack(track);
classOfTrack.chooseTrack();
classOfTrack.restartTrack(track);
classOfTrack.playMainButton();

function first() {
    $('.audioTag').src = localStorage.getItem('lastLink');
    $('.player-cover').src = localStorage.getItem('lastCover');
    goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack');
    $('.track-player').innerText = localStorage.getItem('lastTrack');
    $('.artist-player').innerText = localStorage.getItem('lastArtist');
    $('.left-time').innerText = localStorage.getItem('lastFullTime');
    $('.audioTag').volume = localStorage.getItem('lastVolumeLevel');
    $('.audioTag').currentTime = localStorage.getItem('lastPositionOfTrack');
    track.id = localStorage.getItem('lastIDtrack');

    document.querySelector('.tracks-amount').innerText = trackList.length;
    trackList.forEach(song => {

        if (song.dataset.track_id == track.id) {
            song.classList.add('PastPaused');
            song.querySelectorAll('.play_now').forEach(paintedBlue => {
                paintedBlue.style.color = '#5C67DE';
                song.querySelector('.artist-main').style.color = 'white';
                song.querySelector('.play_now_list').setAttribute('src','icons/pause_list.svg');
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', first);

// SWITCH TRACK NEXT/PREVIOUS
let switchButtons = document.querySelectorAll('.switch-track');
    let curId =  localStorage.getItem('lastIDtrack');
track.id = curId;
switchButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
curId = track.id;
        if(curId >= trackList.length){
            curId = 0;
        }
        if(btn.className.includes('next-track')){
            ++curId;
        }
        if(btn.className.includes('previous-track')){
         --curId;
        }

let elemFromList = document.getElementById(curId)
track.id = curId;
track.src = elemFromList.querySelector('.track-link').value;
trackList.forEach(clearIcon =>{
    clearIcon.classList.remove('PastPaused');
    clearIcon.classList.remove('paused_now');
    clearIcon.classList.remove('playing_now');

    clearIcon.querySelector('.play_now_list').setAttribute('src', 'icons/play_list.svg');
})
trackData(elemFromList)

document.querySelectorAll('.play_now').forEach(paint => {
    paint.style.color = '';
})
document.querySelectorAll('.artist-main').forEach(artisColor => {
    artisColor.style.color = '';
})
if (elemFromList.id === track.id) {
    elemFromList.querySelectorAll('.play_now').forEach(paint => {
        paint.style.color = '#5C67DE';
        elemFromList.querySelector('.artist-main').style.color = 'white';
        elemFromList.classList.add('playing_now');
    })
}
playingTrack = elemFromList.id;
isPlaying = true;
track.play()
    })
})