let trackDetail = document.querySelectorAll('.track-detail');
let confirmWindow = document.querySelector('.confirm_wrapper');
let deleteTrack = document.querySelector('.delete-track');

trackDetail.forEach(detail => {
    let currentTrack;
    detail.addEventListener('click', function (event) {
        if (detail.contains(event.target)) {
            currentTrack = event.target.closest('.current-track-main').dataset.track_id;
            console.log(currentTrack)
            let thisCoords = detail.getBoundingClientRect();
            console.log(thisCoords)
            confirmWindow.style.position = 'absolute';
            confirmWindow.style.display = 'block';
            confirmWindow.style.top = thisCoords.top - $('.confirm_delete_message').offsetHeight + window.pageYOffset  - 20 + 'px';
            confirmWindow.style.left = thisCoords.left - detail.offsetWidth  + window.pageXOffset + window.scrollX - 20 + 'px';
            event.stopPropagation()
        }
        console.log(currentTrack)
    })

    deleteTrack.addEventListener('click', function () {
        let objCurTrack = {
            'ID': currentTrack,
        }
        console.log(objCurTrack)
        fetch('deleteTrack.php', {
            method: 'POST',
            body: JSON.stringify(objCurTrack)
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    })
})