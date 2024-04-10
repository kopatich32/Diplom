let trackDetail = document.querySelectorAll('.track-detail');
let confirmWindow = document.querySelector('.confirm_wrapper');
let deleteTrack = document.querySelector('.delete-track');
let downloadLink = document.querySelector('.download-link');
let innerWrapper = document.querySelector('.confirm_delete_message');

trackDetail.forEach(detail => {
    let currentTrackID;
    let objCurTrack = {};
    detail.addEventListener('click', function (event) {

        if (detail.contains(event.target)) {
            currentTrackID = event.target.closest('.current-track-main').dataset.track_id;
            objCurTrack.ID = currentTrackID;
            downloadLink.href = document.getElementById(currentTrackID).closest('.current-track-main').querySelector('.track-link').value;
            let thisCoords = detail.getBoundingClientRect();
            confirmWindow.style.position = 'absolute';
            confirmWindow.style.display = 'block';
            confirmWindow.style.top = thisCoords.top - innerWrapper.offsetHeight + window.pageYOffset  - 20 + 'px';
            confirmWindow.style.left = thisCoords.left - detail.offsetWidth  + window.pageXOffset + window.scrollX - 20 + 'px';
            event.stopPropagation()
            console.log(currentTrackID)
        }
    })
    deleteTrack.addEventListener('click', function () {

        fetch('deleteTrack.php', {
            method: 'POST',
            body: JSON.stringify(objCurTrack)
        })
            .then(resp => resp.text())
            .then(data => console.log(data))
    })
})

//Close tooltip
document.onclick = e => {
    if( deleteTrack.contains(e.target) || downloadLink.contains(e.target) || !confirmWindow.contains(e.target)){
        confirmWindow.style.display = 'none';
    }
}