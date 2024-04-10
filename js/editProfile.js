let profileName = document.querySelector('h1');
let editProfileBtn = document.querySelector('.edit-profile');
let saveProfileBtn = document.querySelector('.save-profile');

if (editProfileBtn) {
    editProfileBtn.addEventListener('click', (e) => {
        profileName.setAttribute('contenteditable', 'true');
        profileName.focus();
        editProfileBtn.style.display = 'none';
        saveProfileBtn.style.display = 'block';
        profileName.style.cssText = `
    box-shadow: 2px 2px 13px 2px #ffffff;
    padding: 20px;
    `
    })
}
if(saveProfileBtn) {
    saveProfileBtn.addEventListener('click', e => {
        saveProfileBtn.style.display = 'none';
        editProfileBtn.style.display = 'block';
        profileName.setAttribute('contenteditable', 'false');

        profileName.style.cssText = null;
        let obj = {
            H1: profileName.innerText
        }
        fetch('editProfile.php', {
            method: 'POST',
            body: JSON.stringify(obj)
        })
            .then(resp => resp.json())
            .then(data => setNewName(data))

        function setNewName(name) {
            profileName.innerHTML = name.new_name;
        }
    })
}