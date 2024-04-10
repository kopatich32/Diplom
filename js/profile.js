let profileOnline = document.querySelector('.profile-online');
let profileMenu = document.querySelector('.profile-menu');
if (profileOnline) {
    profileOnline.onmouseover = () => {
        profileMenu.style.cssText = `
  right: 0;
  transition: .5s;
	`;
    }
}

if(profileMenu) {
    document.addEventListener('click', (e) => {
        if (!profileMenu.contains(e.target)) {
            profileMenu.style.right = '-513px';
        }
    })
}




