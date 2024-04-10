window.onload = function init() {
    dragula([
        document.querySelector('.track-area'),
    ])
    // console.log(dragula())
}






let res = [];
document.onmouseup= () =>{
let allElem = document.querySelectorAll('.current-track-main');
    allElem.forEach(getId =>{
        // console.log(getId.dataset.track_id);
        res.push(getId.dataset.track_id)
        // console.log(res)
    })

}