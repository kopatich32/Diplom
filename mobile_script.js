if (window.innerWidth <= 500) {
	let footer = document.querySelector('footer');
	let bottomPanel = footer.querySelector('.track');
	let trackControl = document.querySelector('.track-control');
	let duration = document.querySelector('.duration');
	let cover = document.querySelector('.current-cover');
	let backWrapper = document.querySelector('.back-to-wrapper');


	function mobile() {
		backWrapper.style.display = 'block';
		cover.insertAdjacentElement('afterend', duration);
		footer.classList.add('detail-track-view');

		footer.querySelector('.track').style.cssText = `
flex-direction: column;
width: 100%;
cursor: auto;
`;
		footer.querySelector('.current-cover').style.cssText = `
width: 100vw;
height: 50%;
`;
		bottomPanel.querySelector('.current-cover').style.cssText = 'width: 100vw !important;\n' +
			'  height: 100% !important';
		bottomPanel.querySelector('.current-track').style.cssText = 'width: auto !important; margin-top: 20px;'
		bottomPanel.querySelector('.track-player').style.cssText = 'font-size: 30px';
		bottomPanel.querySelector('.artist-player').style.cssText = 'font-size: 20px';
		trackControl.querySelector('.previous-track').style.display = 'block';
		trackControl.querySelector('.next-track').style.display = 'block';
		footer.querySelector('.duration').style.cssText = `display: flex; height: 20px`;
		trackControl.style.cssText = `justify-content: center !important; gap: 15% !important; margin-top: 30px !important`;
	}

	bottomPanel.addEventListener('click', mobile);

	backWrapper.firstElementChild.onclick = () => {
		backWrapper.style.display = 'none';
		footer.style.cssText = `transition: .3s;`
		footer.classList.remove('detail-track-view');

		footer.querySelector('.track').style.cssText = `
flex-direction: row;
width: 500px;
cursor: pointer;
`;
		footer.querySelector('.current-cover').style.cssText = `
width: 110px;
height: 100%;`
	bottomPanel.querySelector('.current-cover').style.cssText = `width: 110px; height: 110%';`;
		bottomPanel.querySelector('.current-track').style.cssText = 'width: 110px; margin-top: -20px;';
		bottomPanel.querySelector('.track-player').style.cssText = 'font-size: 16px';
		bottomPanel.querySelector('.artist-player').style.cssText = 'font-size: 16px';
		trackControl.querySelector('.previous-track').style.display = 'none';
		trackControl.querySelector('.next-track').style.display = 'none';
		footer.querySelector('.duration').style.cssText = `display: none;`;
		trackControl.style.cssText = `justify-content: space-between !important;`;








	}
}
