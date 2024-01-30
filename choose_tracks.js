let tracks = document.querySelectorAll('.current-track-main');
let $ = document.querySelector.bind(document);


tracks.forEach(track=>{
    track.addEventListener('click',(e)=>{
        let artist = track.querySelector('.track-name-main').innerHTML;
        let nameOfTrack = track.querySelector('.artist-main').innerHTML;
        let linkOfTrack = track.querySelector('.track-link').value;
        let trackCover = track.querySelector('.track-cover').getAttribute('src');
        // console.log(trackCover)
        // console.log(linkOfTrack)
        // main-player
        $('.track-player').innerHTML = artist;
        $('.artist-player').innerHTML = nameOfTrack;
        $('.player-cover').setAttribute('src',trackCover)
        fetch('change_track.php',{
            method: 'POST',
            body: JSON.stringify({
               'switch':{ currentTrack: linkOfTrack}
            }),
        })
            .then(resp =>resp.json())
            .then(data => switchTrack(data))
        function  switchTrack(track){
            $('source').setAttribute('src',track);

            console.log(track)


        }
        $('#track').play()
    })
})
