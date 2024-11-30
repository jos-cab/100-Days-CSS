const profilePictures = document.getElementsByClassName("profile-picture");
const testProfile = document.getElementsByClassName("profile")[0];
const closeProfileBtn = document.getElementsByClassName("close-btn")[0];

let openProfile = () => testProfile.classList.add("toggle-profile");
let closeProfile = () => testProfile.classList.remove("toggle-profile");

for (let index = 0; index < profilePictures.length; index++) {
	profilePictures[index].addEventListener("click", openProfile);
}

closeProfileBtn.addEventListener("click", closeProfile);
