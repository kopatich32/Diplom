// class GetTrack{
// 	fetchTrack() {
// 		fetch('showExistTracks.php', {
// 			method: 'POST',
// 			body: JSON.stringify({text: 'empty body'}),
// 		})
// 			.then(resp => resp.json())
// 			.then(data =>
// 				existTracks(data)
// 			)
//
// 		function existTracks(trackData) {
// 			for (let i = 1; i < trackData.length; i++) {
// 				let trackCover = trackData[i]['cover'] ? 'covers/' + trackData[i]['cover'] : '/icons/no_cover.svg';
// 				let existTrack = `
//     <div id="${trackData[i]['id']}" class="current-track-main cursor-grab" data-track_id="${trackData[i]['id']}">
//                                 <div class="track-number play_now">counter</div>
//                                 <div class="track-main">
//                                     <div class="main-cover">
//                                         <img class="track-cover"  style="width: 45px; height: 45px" src="${trackCover}" alt="cover">
//                                     </div>
//                                     <div class="current-track-cover">
//                                         <div class="track-name-main play_now">${trackData[i]['track_name']}</div>
//                                         <div class="artist-main">${trackData[i]['artist']}</div>
//                                     </div>
//                                 </div>
//                                 <div class="duration-main play_now">${trackData[i]['duration']}</div>
//                                 <div class="listening-main play_now">${trackData[i]['listening'] ?? ''}</div>
//                                 <div class="is_play">
//                                     <img loading="lazy" class="play_now_list" src="icons/play_list.svg" alt="">
//                                 </div>
//                                 <div class="track-detail">
//                                     <img src="icons/track_info.svg" alt="">
//                                 </div>
//                                 <input class="track-link" type="text" value="tracks/${trackData[i]['link']}" hidden>
//                             </div>
//     `
// 				let trackListArea = document.querySelector('.track-area');
// 				trackListArea.insertAdjacentHTML("beforeend", existTrack);
//
// 			}
// 		}
// 	}
// }
// let clasTrack = new GetTrack();
// clasTrack.fetchTrack()

let $ = document.querySelector.bind(document);
let playBtn = document.querySelector('.main-pause');
let track = document.querySelector('audio');
let mute = document.querySelector('.mute');
let volumeTrack = document.querySelector('.volume-track');
let srcSvg = playBtn.querySelector('img');
let trackList = document.querySelectorAll('.current-track-main');



let arrSrc = [];
// for next track on ended event
trackList.forEach(link => {
	// let srcTrack = link.querySelector('.track-link').value;
	arrSrc.push(link)
})
let isPlaying = false;
let playingTrack;
let counterToBase = 0;
//rewind
document.addEventListener('keydown', (event) => {
	if (event.code === 'ArrowRight') {
		track.currentTime += 5;
		track.play();
		isPlaying = true;
		if (window.innerWidth < 500) {
			srcSvg.setAttribute('src', 'icons/pause.svg');
		} else {
			srcSvg.setAttribute('src', 'icons/main-pause.svg');
		}
	}
	if (event.code === 'ArrowLeft') {
		track.currentTime -= 5;
		track.play();
		isPlaying = true;
		if (window.innerWidth < 500) {
			srcSvg.setAttribute('src', 'icons/pause.svg');
		} else {
			srcSvg.setAttribute('src', 'icons/main-pause.svg');
		}
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
			if (load) {
				load.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg')
			}
			if (playing) {
				playing.querySelector('.play_now_list').setAttribute('src', 'icons/pause_list.svg')
			}
			if (paused) {
				paused.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg')
			}

			if (!isPlaying) {
				isPlaying = true;
				listElem.classList.toggle('playing_now');
				listElem.classList.remove('paused_now');
				trackList.forEach(classes => {
					classes.classList.remove('PastPaused');
				})
				if (window.innerWidth > 500) {
					srcSvg.setAttribute('src', 'icons/main-pause.svg');
				} else {
					srcSvg.setAttribute('src', 'icons/pause.svg');

				}
				playingTrack = track.dataset.current_amount
				track.play();
			} else {
				track.pause();
				isPlaying = false;
				listElem.classList.remove('playing_now');
				listElem.classList.add('paused_now');
				if (window.innerWidth > 500) {
					srcSvg.setAttribute('src', 'icons/play.svg');
				} else {
					srcSvg.setAttribute('src', 'icons/pause_list.svg');

				}
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

			document.querySelectorAll('.play_now').forEach(paint => {
				paint.style.color = '';
			})
			document.querySelectorAll('.artist-main').forEach(artisColor => {
				artisColor.style.color = '';
			})

			track.currentTime = 0;
			let idEndedTrack = +e.target.dataset.current_amount;
			let elemFromList = document.querySelector(`input[value="${idEndedTrack}"]`).closest('.current-track-main');
			elemFromList.classList.remove('playing_now');

			trackList.forEach(clearIcon => {
				clearIcon.querySelector('.play_now_list').setAttribute('src', 'icons/play_list.svg')
			})

			// elemFromList.classList.add('paused_now');

			if(idEndedTrack  == arrSrc.length){
				playingTrack = 1;
			}else{
				playingTrack = +idEndedTrack  + 1;
			}
				let idNextTrack = +e.target.dataset.current_amount + 1;
			if(+e.target.dataset.current_amount === arrSrc.length) {
				idNextTrack = +e.target.dataset.current_amount;
			}
			let nextTrackAfterEnd = document.querySelector(`input[value="${idNextTrack}"]`).closest('.current-track-main');
			nextTrackAfterEnd.classList.add('playing_now');

			nextTrackAfterEnd.querySelectorAll('.play_now').forEach(paint => {
					paint.style.color = 'white';
				})
			nextTrackAfterEnd.querySelector('.artist-main').style.color = 'white';

			if(idEndedTrack === arrSrc.length){
				document.querySelectorAll('.artist-main').forEach(artisColor => {
					artisColor.style.color = '';
				})

				track.dataset.current_amount = 1;
				track.id = arrSrc[0].id;
				track.src = arrSrc[0].querySelector('.track-link').value;
				trackData(arrSrc[0]);

				track.play();
				isPlaying = true;
			}else{
				track.dataset.current_amount = ++idEndedTrack;
				track.src = arrSrc[idEndedTrack  - 1].querySelector('.track-link').value;
				track.currentTime  = 0;
				track.play();
				isPlaying = true;
				trackData(nextTrackAfterEnd);
				saveToStorage(nextTrackAfterEnd);
			}
		})
	}

	chooseTrack() {
		trackList.forEach(audio => {
			audio.addEventListener('click', (e) => {
				if(!localStorage.getItem('lastVolumeLevel')){
					track.volume = 0.5;
				}
				if (window.innerWidth <= 500 ) {
					track.volume = 1;
				}
				trackList.forEach(clearIcon => {
						clearIcon.querySelector('.play_now_list').setAttribute('src', 'icons/play_list.svg')
				})
				if (audio.className.includes('PastPaused')) {
					isPlaying = true;
					audio.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg')
					track.currentTime = localStorage.getItem('lastPositionOfTrack');
					audio.classList.remove('PastPaused');
					audio.classList.add('playing_now');
					playingTrack = audio.dataset.track_id;
					if (window.innerWidth > 500) {
						srcSvg.setAttribute('src', 'icons/main-pause.svg');
					} else {
						srcSvg.setAttribute('src', 'icons/pause.svg');
					}

					track.play();
				} else {
					for (let i = 0; i < trackList.length; i++) {
						trackList[i].classList.remove('playing_now');
						trackList[i].classList.remove('paused_now');
						trackList[i].classList.remove('PastPaused');
					}

					let clickTrack = e.target.closest('.current-track-main');
					let trackLink = clickTrack.querySelector('.track-link').value;
					let idCurrentTrack = clickTrack.querySelector('.show-current-count').value;
					// clickTrack.classList.add('playing_now');

					let showID = clickTrack.querySelector('.show-current-count').dataset.show_current_count;
					localStorage.setItem('curIDatLIst', showID);

					track.id = clickTrack.dataset.track_id;
					track.dataset.current_amount = clickTrack.querySelector('.show-current-count').value;
					// Show current track in tracklist
					document.querySelectorAll('.play_now').forEach(paint => {
						paint.style.color = '';
					})
					document.querySelectorAll('.artist-main').forEach(artisColor => {
						artisColor.style.color = '';
					})
					if (idCurrentTrack === track.dataset.current_amount) {
						clickTrack.querySelectorAll('.play_now').forEach(paint => {
							paint.style.color = '#5C67DE';
						})
						clickTrack.querySelector('.artist-main').style.color = 'white';
					}

					if (isPlaying) {
						isPlaying = true;
						if (playingTrack !== idCurrentTrack) {
							isPlaying = true;
							track.src = trackLink;
							track.play();
							trackData(clickTrack);
							if (window.innerWidth > 500) {
								srcSvg.setAttribute('src', 'icons/main-pause.svg');
							} else {
								srcSvg.setAttribute('src', 'icons/pause.svg');
							}
						} else {
							isPlaying = false;
							console.log('tut')

							track.pause();
							if (window.innerWidth > 500) {
								srcSvg.setAttribute('src', 'icons/play.svg');
							} else {
								srcSvg.setAttribute('src', 'icons/pause_list.svg');
							}
							clickTrack.querySelector('.play_now_list').setAttribute('src', 'icons/pause_list.svg');
							clickTrack.classList.remove('playing_now');
							clickTrack.classList.add('paused_now');
						}
						console.log(isPlaying)
					} else {
						isPlaying = true;
						if (playingTrack !== idCurrentTrack) {
							track.src = trackLink;
						}
						track.play();
						trackData(clickTrack);
					}
					playingTrack = clickTrack.querySelector('.show-current-count').value;
					saveToStorage(clickTrack)
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
	elem.querySelector('.play_now_list').setAttribute('src', 'icons/pause.svg');
	elem.querySelectorAll('.play_now').forEach(paint => {
		paint.style.color = '#5C67DE';
	})
	elem.querySelector('.artist-main').style.color = 'white';

}

function fullDurationTrack(elem) {
	let duration = (elem.duration / 60).toFixed(2).split('.');
	let leftMin = elem.duration - duration[0] * 60;
	if(duration[1]){
if(duration[1] === '00'){
		leftTime.innerHTML = duration[0] + ':' + duration[1];
	}
	else if(Math.floor(leftMin) < 10){
		leftTime.innerHTML = duration[0] + ':0' + (Math.floor(leftMin));
	}

	else{
		leftTime.innerHTML = duration[0] + ':' + (Math.floor(leftMin));
	}
}}

let classOfTrack = new TrackControl();
classOfTrack.updateTrack(track);
classOfTrack.endTrack();
classOfTrack.timeCurTrack(track);
classOfTrack.chooseTrack();
classOfTrack.restartTrack(track);
classOfTrack.playMainButton();

function first() {
	isPlaying = false;
	if (window.innerWidth <= 500) {
		srcSvg.src = 'icons/pause_list.svg';
		track.volume = 1;
	}

	$('.audioTag').src = localStorage.getItem('lastLink');
	$('.player-cover').src = localStorage.getItem('lastCover');
	goneSec.innerHTML = localStorage.getItem('lastPositionOfTrack');
	$('.track-player').innerText = localStorage.getItem('lastTrack');
	$('.artist-player').innerText = localStorage.getItem('lastArtist');
	$('.left-time').innerText = localStorage.getItem('lastFullTime');
	if (!localStorage.getItem('lastVolumeLevel')) {
		track.volume = 0.5;
	}
	if( localStorage.getItem('lastVolumeLevel')){
		$('.audioTag').volume = localStorage.getItem('lastVolumeLevel');
	}else{
		$('.audioTag').volume = .5;
	}
	$('.audioTag').currentTime = localStorage.getItem('lastPositionOfTrack');
	track.id = localStorage.getItem('lastIDtrack');
	if(localStorage.getItem('curIDatLIst')){

		track.dataset.current_amount = localStorage.getItem('curIDatLIst');
	}else{
		track.dataset.current_amount = 1;
	}
	// document.querySelector('.tracks-amount').innerText = trackList.length;
	trackList.forEach(song => {

		if (song.dataset.track_id == track.id) {
			song.classList.add('PastPaused');
			song.querySelectorAll('.play_now').forEach(paintedBlue => {
				paintedBlue.style.color = '#5C67DE';
				song.querySelector('.artist-main').style.color = 'white';
				song.querySelector('.play_now_list').setAttribute('src', 'icons/pause_list.svg');
			})
		}
	})
}

function saveToStorage (lastTrack) {
	localStorage.setItem('lastArtist', lastTrack.querySelector('.artist-main').innerText);
	localStorage.setItem('lastTrack', lastTrack.querySelector('.track-name-main').innerText);
	localStorage.setItem('lastCover', lastTrack.querySelector('.track-cover').src);
	localStorage.setItem('lastFullTime', lastTrack.querySelector('.duration-main').innerText);
	// localStorage.setItem('lastLink', track.src);
	localStorage.setItem('lastLink', lastTrack.querySelector('.track-link').value);
	localStorage.setItem('lastIDtrack', lastTrack.dataset.track_id);
}

document.addEventListener('DOMContentLoaded', first);

// SWITCH TRACK NEXT/PREVIOUS
let switchButtons = document.querySelectorAll('.switch-track');
let curId;
switchButtons.forEach(btn => {
	btn.addEventListener('click', (e) => {

		let atListID = Number(track.dataset.current_amount);
		curId = Number(localStorage.getItem('curIDatLIst') ??  atListID);
		// For save to localStorage on next/prev btn

		let nextStorage = +track.id + 1;
		let prevStorage = +track.id -1;
		// console.log(nextStorage)
		// console.log(prevStorage)
		// let nextElem = document.getElementById(nextStorage)
		// let prevElem = document.getElementById(prevStorage)
		// console.log(nextElem)
		// console.log(prevElem)
		// curId = track.id;
		if (btn.className.includes('next-track')) {
			// saveToStorage(nextElem)
			++track.dataset.current_amount
			curId = atListID;
			++curId;
			if(curId === trackList.length + 1){
				curId = 1;
				track.dataset.current_amount = 1;
			}
			isPlaying  = true;
		}

		if (btn.className.includes('previous-track')) {
			// saveToStorage(prevElem)
			--curId;
			--track.dataset.current_amount;
			curId = track.dataset.current_amount;

			if (curId == 0) {
				curId = trackList.length;
				track.dataset.current_amount = curId;
			}
			isPlaying = true;
		}
		let elemFromList = document.querySelector(`input[value="${curId}"]`).closest('.current-track-main');
		track.id = elemFromList.id;
		track.src = elemFromList.querySelector('.track-link').value;
		trackList.forEach(clearIcon => {
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
		// isPlaying = true;
		if (window.innerWidth < 500) {
			srcSvg.setAttribute('src', 'icons/pause.svg');
		}
		playingTrack = elemFromList.querySelector('.show-current-count').value;
		track.play()
	})
})
