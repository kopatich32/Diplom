// let tracks = document.querySelectorAll('.current-track-main');
// let $ = document.querySelector.bind(document);
//
// function play(){
//     tracks.forEach(track=>{
//         track.addEventListener('click',(e)=>{
//             $('#track').remove()
//             let artist = track.querySelector('.track-name-main').innerHTML;
//             let nameOfTrack = track.querySelector('.artist-main').innerHTML;
//             let linkOfTrack = track.querySelector('.track-link').value;
//             let trackCover = track.querySelector('.track-cover').getAttribute('src');
//             // main-player
//             $('.track-player').innerHTML = artist;
//             $('.artist-player').innerHTML = nameOfTrack;
//             $('.player-cover').setAttribute('src',trackCover);
//             // $('source').setAttribute('src',track);
//             let newAudio = document.createElement('audio');
//             $('.wrapper').insertAdjacentElement('afterend',newAudio);
//             let newSource = document.createElement('source');
//             newAudio.insertAdjacentElement('afterbegin',newSource);
//             newAudio.setAttribute('controls','true');
//             newAudio.style.display ='none';
//             newSource.setAttribute('src',linkOfTrack)
//             newAudio.id = 'track';
//             $('#track').play()
//
//         })
//     })
//
// }
