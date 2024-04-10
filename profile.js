let profileOnline = document.querySelector('.profile-online');
let profileMenu = document.querySelector('.profile-menu');
profileOnline.onmouseover = ()=>{
	profileMenu.style.cssText = `
  width: 30vw;
   height: 100vh ;
  z-index: 9;
  transition: .5s;
	`;
}

document.addEventListener('click',(e)=>{
	if(!profileMenu.contains(e.target)){
		profileMenu.style.width = '0';
	}
})